import React from 'react';

type IconProps = { size?: number; className?: string };

const stroke = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
});

export function Sparkle({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2l2.2 6.6L21 11l-6.8 2.4L12 20l-2.2-6.6L3 11l6.8-2.4z" />
    </svg>
  );
}

export function SparkleBadge({ size = 26, radius = 7 }: { size?: number; radius?: number }) {
  return (
    <span className="sparkle-badge" style={{ width: size, height: size, borderRadius: radius }}>
      <Sparkle size={Math.round(size * 0.6)} />
    </span>
  );
}

export function ChromeIcon({ size = 20 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5h8.5M8.97 13.75L4.7 6.4M15.03 13.75l-4.27 7.2" />
    </svg>
  );
}

export function Pen({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M4 20h4L19 9l-4-4L4 16z" />
      <path d="M13.5 6.5l4 4" />
    </svg>
  );
}

export function Check({ size = 16 }: IconProps) {
  return (
    <svg {...stroke(size)} strokeWidth={2.5}>
      <path d="M5 12l4 4 10-10" />
    </svg>
  );
}

export function Shield({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </svg>
  );
}

export function Lines({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M4 6h16M4 12h10M4 18h7" />
    </svg>
  );
}

export function ThumbUp({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M7 11v9H4v-9zM7 11l4-8a2 2 0 0 1 2 2v4h6a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 17.8 20H7" />
    </svg>
  );
}

export function Repost({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4" />
      <path d="M21 13v2a3 3 0 0 1-3 3H3" />
    </svg>
  );
}

export function Person({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

export function Bolt({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
    </svg>
  );
}

export function Keyboard({ size = 28 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" />
    </svg>
  );
}

export function Menu({ size = 22 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function Close({ size = 22 }: IconProps) {
  return (
    <svg {...stroke(size)}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
