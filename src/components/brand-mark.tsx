export function BrandMark({ className = "h-9 w-9", title = "KanoHub" }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label={title}>
      <defs>
        <linearGradient id="khg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="55%" stopColor="#047857" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="16" fill="url(#khg)" />
      <path d="M12 22 L32 10 L52 22 L52 26 L12 26 Z" fill="#fbbf24" opacity="0.95" />
      <path d="M18 22 L32 14 L46 22" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.5" />
      <text
        x="32"
        y="48"
        textAnchor="middle"
        fill="white"
        fontFamily="ui-sans-serif, system-ui, sans-serif"
        fontWeight="800"
        fontSize="22"
        letterSpacing="-0.5"
      >
        KH
      </text>
    </svg>
  );
}
