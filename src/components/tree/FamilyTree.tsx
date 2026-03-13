"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import type { Person } from "@/lib/types";
import {
  buildTreeIndex,
  buildTree,
  flattenTree,
  toggleNode,
  expandPathToNode,
  isNodeInViewport,
  type TreeNode,
} from "@/lib/tree-utils";
import PersonNode, { SpouseNode, CoupleToggle, NODE_WIDTH, NODE_HEIGHT, GENDER_COLORS } from "./PersonNode";
import PersonDetail from "./PersonDetail";
import TreeControls from "./TreeControls";
import { useTreeZoomPan } from "./useTreeZoomPan";
import familyData from "@/data/family-tree.json";

const LEVEL_HEIGHT = 160;
const CHAIN_HEIGHT = 110;
const COUPLE_OFFSET = 78;
const SIBLING_GAP = 30;
const COUPLE_MIN_WIDTH = 2 * COUPLE_OFFSET + NODE_WIDTH + SIBLING_GAP;
const SINGLE_MIN_WIDTH = NODE_WIDTH + SIBLING_GAP;
const INITIAL_DEPTH = 8;

const LINK_STROKE = "#D6D3D1";
const STROKE_WIDTH = 1.5;

const TOGGLE_OFFSET = 12;

function TreeLink({
  parent,
  child,
}: {
  parent: TreeNode;
  child: TreeNode;
}) {
  const parentHasSpouse = parent.person.spouses.length > 0;
  const childHasSpouse = child.person.spouses.length > 0;

  const halfH = NODE_HEIGHT / 2;

  const startY = parentHasSpouse
    ? parent.y + halfH + TOGGLE_OFFSET + 10
    : parent.y + halfH + (parent.person.children.length > 0 ? TOGGLE_OFFSET + 10 : 0);

  const endX = childHasSpouse ? child.x - COUPLE_OFFSET : child.x;
  const endY = child.y - halfH;

  const midY = (startY + endY) / 2;

  return (
    <path
      d={`M${parent.x},${startY} C${parent.x},${midY} ${endX},${midY} ${endX},${endY}`}
      fill="none"
      stroke={LINK_STROKE}
      strokeWidth={STROKE_WIDTH}
    />
  );
}

export default function FamilyTree() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 1200, height: 800 });

  const { transform, setTransform, zoomIn, zoomOut, handlers } = useTreeZoomPan(containerRef);

  const [index] = useState(() => buildTreeIndex(familyData as Person[]));
  const [tree, setTree] = useState<TreeNode | null>(() => {
    const rootPerson = (familyData as Person[]).find((p) => !p.parentId);
    if (!rootPerson) return null;
    return buildTree(rootPerson.id, buildTreeIndex(familyData as Person[]), INITIAL_DEPTH);
  });

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [searchIndex, setSearchIndex] = useState(0);

  const layoutTree = useCallback((root: TreeNode): TreeNode => {
    function computeWidth(node: TreeNode): number {
      const minW = node.person.spouses.length > 0 ? COUPLE_MIN_WIDTH : SINGLE_MIN_WIDTH;
      if (node.collapsed || node.children.length === 0) {
        return minW;
      }
      let childrenTotal = 0;
      for (const child of node.children) {
        childrenTotal += computeWidth(child);
      }
      return Math.max(minW, childrenTotal);
    }

    function assignPositions(node: TreeNode, xStart: number, yPos: number, depth: number): void {
      const width = computeWidth(node);
      node.x = xStart + width / 2;
      node.y = yPos;
      node.depth = depth;

      if (!node.collapsed && node.children.length > 0) {
        const gap = node.children.length === 1 ? CHAIN_HEIGHT : LEVEL_HEIGHT;
        const childY = yPos + gap;

        let currentX = xStart;
        for (const child of node.children) {
          const childWidth = computeWidth(child);
          assignPositions(child, currentX, childY, depth + 1);
          currentX += childWidth;
        }
      }
    }

    assignPositions(root, 0, 0, 0);
    return root;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0]?.contentRect ?? { width: 1200, height: 800 };
      setContainerSize({ width, height });
    });
    ro.observe(el);
    const preventWheel = (e: WheelEvent) => e.preventDefault();
    el.addEventListener("wheel", preventWheel, { passive: false });
    return () => {
      ro.disconnect();
      el.removeEventListener("wheel", preventWheel);
    };
  }, []);

  const hasInitialized = useRef(false);
  useEffect(() => {
    if (!tree || containerSize.width <= 0 || hasInitialized.current) return;
    const laid = layoutTree(tree);
    const nodes = flattenTree(laid);
    if (nodes.length > 0) {
      hasInitialized.current = true;
      const centerX = nodes[0].x;
      setTransform({
        x: containerSize.width / 2 - centerX * 0.85,
        y: 40,
        k: 0.85,
      });
    }
  }, [tree, containerSize.width, layoutTree, setTransform]);

  const viewport = {
    x: -transform.x / transform.k,
    y: -transform.y / transform.k,
    w: containerSize.width / transform.k,
    h: containerSize.height / transform.k,
  };

  const handleReset = useCallback(() => {
    if (!tree) return;
    const laid = layoutTree(tree);
    const nodes = flattenTree(laid);
    if (nodes.length > 0 && containerSize.width > 0) {
      const centerX = nodes[0].x;
      setTransform({
        x: containerSize.width / 2 - centerX * 0.85,
        y: 40,
        k: 0.85,
      });
    }
  }, [tree, layoutTree, containerSize.width, containerSize.height, setTransform]);

  const handleToggle = useCallback(
    (node: TreeNode) => {
      toggleNode(node, index);
      setTree((prev) => (prev ? { ...prev } : null));
    },
    [index]
  );

  const handleSearch = useCallback(
    (query: string) => {
      if (!query.trim()) {
        setSearchResults([]);
        setSearchIndex(0);
        setHighlightedId(null);
        return;
      }
      const q = query.toLowerCase();
      const results: string[] = [];
      for (const [id, person] of index) {
        if (person.name.toLowerCase().includes(q)) {
          results.push(id);
        }
      }
      setSearchResults(results);
      setSearchIndex(0);
      if (results.length > 0) navigateToResult(results[0]);
    },
    [index]
  );

  const navigateToResult = useCallback(
    (personId: string) => {
      if (!tree) return;
      setHighlightedId(personId);
      expandPathToNode(tree, personId, index);
      setTree({ ...tree });

      requestAnimationFrame(() => {
        const laid = layoutTree(tree);
        const nodes = flattenTree(laid);
        const target = nodes.find((n) => n.person.id === personId);
        if (target && containerSize.width > 0) {
          setTransform({
            x: containerSize.width / 2 - target.x * 0.85,
            y: containerSize.height / 3 - target.y * 0.85,
            k: 0.85,
          });
        }
      });
    },
    [tree, index, layoutTree, containerSize, setTransform]
  );

  const handleNextResult = useCallback(() => {
    if (searchResults.length === 0) return;
    const next = (searchIndex + 1) % searchResults.length;
    setSearchIndex(next);
    navigateToResult(searchResults[next]);
  }, [searchResults, searchIndex, navigateToResult]);

  const handlePrevResult = useCallback(() => {
    if (searchResults.length === 0) return;
    const prev = (searchIndex - 1 + searchResults.length) % searchResults.length;
    setSearchIndex(prev);
    navigateToResult(searchResults[prev]);
  }, [searchResults, searchIndex, navigateToResult]);

  if (!tree) {
    return (
      <div className="flex items-center justify-center h-96 text-stone-500">
        Nenhum dado disponível para a árvore genealógica.
      </div>
    );
  }

  const laidTree = layoutTree(tree);
  const allNodes = flattenTree(laidTree);

  const links: Array<{ parent: TreeNode; child: TreeNode }> = [];
  function collectLinks(node: TreeNode) {
    if (!node.collapsed) {
      for (const child of node.children) {
        links.push({ parent: node, child });
        collectLinks(child);
      }
    }
  }
  collectLinks(laidTree);

  const visibleNodes = allNodes.filter((n) =>
    isNodeInViewport(n, viewport.x, viewport.y, viewport.w, viewport.h, 300)
  );
  const visibleNodeIds = new Set(visibleNodes.map((n) => n.person.id));
  const visibleLinks = links.filter(
    (l) =>
      visibleNodeIds.has(l.parent.person.id) || visibleNodeIds.has(l.child.person.id)
  );

  return (
    <div className="relative w-full h-[calc(100vh-140px)] bg-stone-50 rounded-lg overflow-hidden border border-stone-200">
      <TreeControls
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onReset={handleReset}
        onSearch={handleSearch}
        searchResults={searchResults}
        currentSearchIndex={searchIndex}
        onNextResult={handleNextResult}
        onPrevResult={handlePrevResult}
      />

      {selectedPerson && (
        <PersonDetail
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
        />
      )}

      <div
        ref={containerRef}
        className="w-full h-full overflow-hidden"
        style={{ cursor: "grab" }}
        {...handlers}
        onWheel={(e) => {
          e.preventDefault();
          handlers.onWheel(e);
        }}
      >
        <svg
          className="w-full h-full block"
          width={containerSize.width}
          height={containerSize.height}
        >
          <g
            transform={`translate(${transform.x},${transform.y}) scale(${transform.k})`}
            style={{ transformOrigin: "0 0" }}
          >
            {visibleLinks.map((link, i) => (
              <TreeLink key={`link-${i}`} parent={link.parent} child={link.child} />
            ))}

            {visibleNodes.map((node) => {
              const hasSpouse = node.person.spouses.length > 0;
              const personX = hasSpouse ? node.x - COUPLE_OFFSET : node.x;
              const spouseX = node.x + COUPLE_OFFSET;
              const hasChildren = node.person.children.length > 0;
              const accent = (GENDER_COLORS[node.person.gender] || GENDER_COLORS.U).accent;

              return (
                <g key={node.person.id}>
                  {hasSpouse && (
                    <line
                      x1={personX + NODE_WIDTH / 2}
                      y1={node.y}
                      x2={spouseX - NODE_WIDTH / 2}
                      y2={node.y}
                      stroke={LINK_STROKE}
                      strokeWidth={STROKE_WIDTH}
                    />
                  )}
                  <PersonNode
                    person={node.person}
                    x={personX}
                    y={node.y}
                    isCollapsed={node.collapsed}
                    hasChildren={hasChildren}
                    isHighlighted={highlightedId === node.person.id}
                    hideToggle={hasSpouse}
                    onClick={() => setSelectedPerson(node.person)}
                    onToggle={() => handleToggle(node)}
                  />
                  {hasSpouse && node.person.spouses[0] && (
                    <SpouseNode
                      spouse={node.person.spouses[0]}
                      partnerGender={node.person.gender}
                      x={spouseX}
                      y={node.y}
                      onClick={() => setSelectedPerson(node.person)}
                    />
                  )}
                  {hasSpouse && hasChildren && (
                    <CoupleToggle
                      x={node.x}
                      y={node.y + NODE_HEIGHT / 2 + TOGGLE_OFFSET}
                      isCollapsed={node.collapsed}
                      accent={accent}
                      onToggle={() => handleToggle(node)}
                    />
                  )}
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <div className="absolute bottom-4 left-4 z-10 text-xs text-stone-400 bg-white/80 rounded px-2 py-1">
        {allNodes.length} pessoas visíveis | Scroll para zoom, arraste para mover
      </div>
    </div>
  );
}
