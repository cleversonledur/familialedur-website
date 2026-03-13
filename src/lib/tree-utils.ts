import type { Person } from "./types";

export interface TreeNode {
  person: Person;
  x: number;
  y: number;
  children: TreeNode[];
  collapsed: boolean;
  visible: boolean;
  depth: number;
}

export function buildTreeIndex(people: Person[]): Map<string, Person> {
  const index = new Map<string, Person>();
  for (const p of people) {
    index.set(p.id, p);
  }
  return index;
}

export function findRootPerson(people: Person[]): Person | undefined {
  return people.find((p) => !p.parentId);
}

export function buildTree(
  rootId: string,
  index: Map<string, Person>,
  maxDepth: number = 4
): TreeNode | null {
  const root = index.get(rootId);
  if (!root) return null;

  function build(personId: string, depth: number): TreeNode | null {
    const person = index.get(personId);
    if (!person) return null;

    const collapsed = depth >= maxDepth;
    const childNodes: TreeNode[] = [];

    if (!collapsed) {
      for (const childId of person.children) {
        const childNode = build(childId, depth + 1);
        if (childNode) childNodes.push(childNode);
      }
    }

    return {
      person,
      x: 0,
      y: 0,
      children: childNodes,
      collapsed: collapsed && person.children.length > 0,
      visible: true,
      depth,
    };
  }

  return build(rootId, 0);
}

export function countDescendants(node: TreeNode): number {
  if (node.collapsed || node.children.length === 0) return 1;
  let count = 0;
  for (const child of node.children) {
    count += countDescendants(child);
  }
  return Math.max(count, 1);
}

export function flattenTree(node: TreeNode): TreeNode[] {
  const result: TreeNode[] = [node];
  if (!node.collapsed) {
    for (const child of node.children) {
      result.push(...flattenTree(child));
    }
  }
  return result;
}

export function searchTree(
  node: TreeNode,
  query: string
): TreeNode | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;

  if (node.person.name.toLowerCase().includes(q)) {
    return node;
  }

  for (const child of node.children) {
    const found = searchTree(child, q);
    if (found) return found;
  }

  return null;
}

export function findPathToNode(
  root: TreeNode,
  targetId: string
): string[] | null {
  if (root.person.id === targetId) {
    return [root.person.id];
  }

  for (const child of root.children) {
    const path = findPathToNode(child, targetId);
    if (path) {
      return [root.person.id, ...path];
    }
  }

  return null;
}

export function expandPathToNode(
  root: TreeNode,
  targetId: string,
  index: Map<string, Person>
): boolean {
  if (root.person.id === targetId) return true;

  for (const existingChild of root.children) {
    if (expandPathToNode(existingChild, targetId, index)) {
      root.collapsed = false;
      return true;
    }
  }

  if (root.collapsed && root.person.children.length > 0) {
    root.collapsed = false;
    root.children = [];
    for (const childId of root.person.children) {
      const person = index.get(childId);
      if (person) {
        root.children.push({
          person,
          x: 0,
          y: 0,
          children: [],
          collapsed: person.children.length > 0,
          visible: true,
          depth: root.depth + 1,
        });
      }
    }

    for (const child of root.children) {
      if (expandPathToNode(child, targetId, index)) {
        return true;
      }
    }
  }

  return false;
}

export function toggleNode(
  node: TreeNode,
  index: Map<string, Person>
): void {
  if (node.collapsed) {
    node.collapsed = false;
    if (node.children.length === 0) {
      for (const childId of node.person.children) {
        const person = index.get(childId);
        if (person) {
          node.children.push({
            person,
            x: 0,
            y: 0,
            children: [],
            collapsed: person.children.length > 0,
            visible: true,
            depth: node.depth + 1,
          });
        }
      }
    } else {
      for (const child of node.children) {
        if (child.person.children.length > 0) {
          child.collapsed = true;
        }
      }
    }
  } else {
    node.collapsed = true;
  }
}

function extractYear(dateStr: string | undefined): string {
  if (!dateStr) return "";
  if (dateStr.startsWith("~")) return dateStr.slice(0, 5);
  const parts = dateStr.split(".");
  if (parts.length === 3) return parts[2];
  if (/^\d{4}$/.test(dateStr)) return dateStr;
  if (dateStr.includes("-")) {
    const iso = dateStr.split("-");
    if (iso.length >= 1 && /^\d{4}$/.test(iso[0])) return iso[0];
  }
  return dateStr.slice(0, 4);
}

export function getPersonDisplayInfo(person: Person): {
  dates: string;
  birthInfo: string;
  deathInfo: string;
} {
  const birthYear = extractYear(person.birthDate) || "?";
  const deathYear = extractYear(person.deathDate);

  const dates = deathYear ? `${birthYear} - ${deathYear}` : birthYear !== "?" ? `n. ${birthYear}` : "";
  const birthInfo = [person.birthDate, person.birthPlace]
    .filter(Boolean)
    .join(", ");
  const deathInfo = [person.deathDate, person.deathPlace]
    .filter(Boolean)
    .join(", ");

  return { dates, birthInfo, deathInfo };
}

export function isNodeInViewport(
  node: TreeNode,
  viewportX: number,
  viewportY: number,
  viewportWidth: number,
  viewportHeight: number,
  margin: number = 200
): boolean {
  return (
    node.x >= viewportX - margin &&
    node.x <= viewportX + viewportWidth + margin &&
    node.y >= viewportY - margin &&
    node.y <= viewportY + viewportHeight + margin
  );
}
