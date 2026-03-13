import type { Person, Spouse } from "@/lib/types";
import { getPersonDisplayInfo } from "@/lib/tree-utils";

interface PersonNodeProps {
  person: Person;
  x: number;
  y: number;
  isCollapsed: boolean;
  hasChildren: boolean;
  isHighlighted: boolean;
  hideToggle?: boolean;
  onClick: () => void;
  onToggle: () => void;
}

export interface SpouseNodeProps {
  spouse: Spouse;
  partnerGender: "M" | "F" | "U";
  x: number;
  y: number;
  onClick: () => void;
}

export interface CoupleToggleProps {
  x: number;
  y: number;
  isCollapsed: boolean;
  accent: string;
  onToggle: () => void;
}

const NODE_WIDTH = 140;
const NODE_HEIGHT = 90;
const NAME_MAX_CHARS_PER_LINE = 18;
const TOP_BAR_HEIGHT = 4;
const ICON_SIZE = 16;

const GENDER_COLORS: Record<string, { accent: string }> = {
  M: { accent: "#3B82F6" },
  F: { accent: "#DB2777" },
  U: { accent: "#78716C" },
};

function PersonIcon({ color, size = 16 }: { color: string; size?: number }) {
  const s = size / 24;
  return (
    <g transform={`scale(${s}) translate(-12, -12)`}>
      <circle cx="12" cy="8" r="5" fill={color} />
      <path
        d="M5 22 Q5 14 12 14 Q19 14 19 22"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </g>
  );
}

function CardBackground({
  halfW,
  halfH,
  accent,
  isHighlighted,
}: {
  halfW: number;
  halfH: number;
  accent: string;
  isHighlighted?: boolean;
}) {
  return (
    <>
      <rect
        x={-halfW}
        y={-halfH}
        width={NODE_WIDTH}
        height={NODE_HEIGHT}
        rx={8}
        ry={8}
        fill={isHighlighted ? "#FEF9C3" : "#FFFFFF"}
        stroke={isHighlighted ? "#D97706" : "#E7E5E4"}
        strokeWidth={isHighlighted ? 2 : 1}
      />
      <rect
        x={-halfW}
        y={-halfH}
        width={NODE_WIDTH}
        height={TOP_BAR_HEIGHT}
        rx={8}
        ry={0}
        fill={accent}
      />
      <clipPath id="card-clip">
        <rect x={-halfW} y={-halfH} width={NODE_WIDTH} height={NODE_HEIGHT} rx={8} />
      </clipPath>
    </>
  );
}

export default function PersonNode({
  person,
  x,
  y,
  isCollapsed,
  hasChildren,
  isHighlighted,
  hideToggle,
  onClick,
  onToggle,
}: PersonNodeProps) {
  const { dates } = getPersonDisplayInfo(person);
  const accent = (GENDER_COLORS[person.gender] || GENDER_COLORS.U).accent;
  const halfW = NODE_WIDTH / 2;
  const halfH = NODE_HEIGHT / 2;

  const nameLines = wrapText(person.name, NAME_MAX_CHARS_PER_LINE);

  const iconCenterY = -halfH + TOP_BAR_HEIGHT + 4 + ICON_SIZE / 2;
  const nameStartY = iconCenterY + ICON_SIZE / 2 + 8;
  const datesY = nameStartY + nameLines.length * 12 + 3;
  const idY = datesY + (dates ? 12 : 0);

  return (
    <g
      transform={`translate(${x},${y})`}
      className="cursor-pointer"
      onClick={onClick}
    >
      <CardBackground halfW={halfW} halfH={halfH} accent={accent} isHighlighted={isHighlighted} />

      <g transform={`translate(0, ${iconCenterY})`}>
        <PersonIcon color={accent} size={ICON_SIZE} />
      </g>

      <text
        x={0}
        y={nameStartY}
        textAnchor="middle"
        fontSize={11}
        fontWeight={700}
        fill="#1C1917"
        className="select-none"
      >
        {nameLines.map((line, i) => (
          <tspan key={i} x={0} dy={i === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>

      {dates && (
        <text
          x={0}
          y={datesY}
          textAnchor="middle"
          fontSize={9}
          fill="#57534E"
          className="select-none"
        >
          {dates}
        </text>
      )}

      {person.familySearchId && (
        <text
          x={0}
          y={idY}
          textAnchor="middle"
          fontSize={8}
          fill="#78716C"
          className="select-none font-mono"
        >
          {person.familySearchId}
        </text>
      )}

      {hasChildren && !hideToggle && (
        <g
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className="cursor-pointer"
        >
          <circle
            cx={0}
            cy={halfH + 12}
            r={9}
            fill={isCollapsed ? accent : "#FFF"}
            stroke={accent}
            strokeWidth={1.5}
          />
          <text
            x={0}
            y={halfH + 16}
            textAnchor="middle"
            fontSize={12}
            fontWeight={700}
            fill={isCollapsed ? "#FFF" : accent}
            className="select-none"
          >
            {isCollapsed ? "+" : "−"}
          </text>
        </g>
      )}
    </g>
  );
}

function wrapText(text: string, maxCharsPerLine: number): string[] {
  if (text.length <= maxCharsPerLine) return [text];
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = "";
  for (const w of words) {
    const next = current ? `${current} ${w}` : w;
    if (next.length <= maxCharsPerLine) {
      current = next;
    } else {
      if (current) lines.push(current);
      if (w.length > maxCharsPerLine) {
        for (let i = 0; i < w.length; i += maxCharsPerLine) {
          lines.push(w.slice(i, i + maxCharsPerLine));
        }
        current = "";
      } else {
        current = w;
      }
    }
  }
  if (current) lines.push(current);
  return lines;
}

function spouseDates(spouse: Spouse): string {
  const parts: string[] = [];
  if (spouse.birthDate) parts.push(spouse.birthDate);
  if (spouse.deathDate) parts.push(spouse.deathDate);
  return parts.join("–");
}

export function SpouseNode({ spouse, partnerGender, x, y, onClick }: SpouseNodeProps) {
  const accent =
    partnerGender === "M"
      ? GENDER_COLORS.F.accent
      : partnerGender === "F"
        ? GENDER_COLORS.M.accent
        : GENDER_COLORS.U.accent;
  const halfW = NODE_WIDTH / 2;
  const halfH = NODE_HEIGHT / 2;
  const nameLines = wrapText(spouse.name, NAME_MAX_CHARS_PER_LINE);
  const iconCenterY = -halfH + TOP_BAR_HEIGHT + 4 + ICON_SIZE / 2;
  const nameStartY = iconCenterY + ICON_SIZE / 2 + 8;
  const datesY = nameStartY + nameLines.length * 12 + 3;
  const dates = spouseDates(spouse);

  return (
    <g transform={`translate(${x},${y})`} className="cursor-pointer" onClick={onClick}>
      <CardBackground halfW={halfW} halfH={halfH} accent={accent} />

      <g transform={`translate(0, ${iconCenterY})`}>
        <PersonIcon color={accent} size={ICON_SIZE} />
      </g>

      <text
        x={0}
        y={nameStartY}
        textAnchor="middle"
        fontSize={11}
        fontWeight={700}
        fill="#1C1917"
        className="select-none"
      >
        {nameLines.map((line, i) => (
          <tspan key={i} x={0} dy={i === 0 ? 0 : 12}>
            {line}
          </tspan>
        ))}
      </text>
      {dates && (
        <text
          x={0}
          y={datesY}
          textAnchor="middle"
          fontSize={9}
          fill="#57534E"
          className="select-none"
        >
          {dates}
        </text>
      )}
    </g>
  );
}

export function CoupleToggle({ x, y, isCollapsed, accent, onToggle }: CoupleToggleProps) {
  return (
    <g
      transform={`translate(${x},${y})`}
      onClick={(e) => {
        e.stopPropagation();
        onToggle();
      }}
      className="cursor-pointer"
    >
      <circle
        cx={0}
        cy={0}
        r={9}
        fill={isCollapsed ? accent : "#FFF"}
        stroke={accent}
        strokeWidth={1.5}
      />
      <text
        x={0}
        y={4}
        textAnchor="middle"
        fontSize={12}
        fontWeight={700}
        fill={isCollapsed ? "#FFF" : accent}
        className="select-none"
      >
        {isCollapsed ? "+" : "−"}
      </text>
    </g>
  );
}

export { NODE_WIDTH, NODE_HEIGHT, GENDER_COLORS };
