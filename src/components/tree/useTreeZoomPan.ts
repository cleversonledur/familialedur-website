"use client";

import { useRef, useState, useCallback } from "react";

export interface Transform {
  x: number;
  y: number;
  k: number;
}

const MIN_SCALE = 0.15;
const MAX_SCALE = 3;

export function useTreeZoomPan(containerRef: React.RefObject<HTMLDivElement | null>) {
  const [transform, setTransform] = useState<Transform>({ x: 0, y: 0, k: 0.85 });
  const transformRef = useRef(transform);
  transformRef.current = transform;
  const panStart = useRef<{ x: number; y: number; k: number; startX: number; startY: number } | null>(null);

  const zoomAt = useCallback(
    (svgX: number, svgY: number, delta: number) => {
      setTransform((t) => {
        const factor = 1 - delta * 0.002;
        const newK = Math.min(MAX_SCALE, Math.max(MIN_SCALE, t.k * factor));
        const newX = svgX - ((svgX - t.x) / t.k) * newK;
        const newY = svgY - ((svgY - t.y) / t.k) * newK;
        return { x: newX, y: newY, k: newK };
      });
    },
    []
  );

  const zoomIn = useCallback(() => {
    setTransform((t) => ({
      ...t,
      k: Math.min(MAX_SCALE, t.k * 1.3),
    }));
  }, []);

  const zoomOut = useCallback(() => {
    setTransform((t) => ({
      ...t,
      k: Math.max(MIN_SCALE, t.k * 0.7),
    }));
  }, []);

  const setTransformTo = useCallback((t: Transform) => setTransform(t), []);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (!containerRef.current) return;
      e.preventDefault();
      const rect = containerRef.current.getBoundingClientRect();
      const svgX = e.clientX - rect.left;
      const svgY = e.clientY - rect.top;
      zoomAt(svgX, svgY, e.deltaY);
    },
    [containerRef, zoomAt]
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const t = transformRef.current;
    panStart.current = {
      x: t.x,
      y: t.y,
      k: t.k,
      startX: e.clientX,
      startY: e.clientY,
    };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!panStart.current) return;
    const p = panStart.current;
    setTransform({
      x: p.x + (e.clientX - p.startX),
      y: p.y + (e.clientY - p.startY),
      k: p.k,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    panStart.current = null;
  }, []);

  const handleMouseLeave = useCallback(() => {
    panStart.current = null;
  }, []);

  return {
    transform,
    setTransform: setTransformTo,
    zoomIn,
    zoomOut,
    zoomAt,
    handlers: {
      onWheel: handleWheel,
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseLeave,
    },
  };
}
