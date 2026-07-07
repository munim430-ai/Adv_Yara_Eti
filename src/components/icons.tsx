type IconProps = { className?: string };

const base = "1.5" as const;

export function IconFamily({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <circle cx="8" cy="7" r="3" />
      <circle cx="16" cy="7" r="3" />
      <path d="M2.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
      <path d="M10.5 20c0-3.3 2.5-6 5.5-6s5.5 2.7 5.5 6" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function IconLand({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V10l7-6 7 6v11" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

export function IconScale({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M12 3v18" />
      <path d="M5 7h14" />
      <path d="M5 7l-3 6a3.5 3.5 0 007 0L6 7" />
      <path d="M19 7l-3 6a3.5 3.5 0 007 0L18 7" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function IconDocument({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15h6M9 9h2" />
    </svg>
  );
}

export function IconCheck({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.5l2.5 2.5L16 9.5" />
    </svg>
  );
}

export function IconBook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M4 4.5A2.5 2.5 0 016.5 2H20v17H6.5A2.5 2.5 0 004 16.5v-12z" />
      <path d="M4 16.5A2.5 2.5 0 016.5 19H20" />
    </svg>
  );
}

export function IconHeart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M12 20.5S3.5 15 3.5 8.8A4.3 4.3 0 0112 6.2a4.3 4.3 0 018.5 2.6c0 6.2-8.5 11.7-8.5 11.7z" />
    </svg>
  );
}

export const practiceIcons: Record<string, (props: IconProps) => React.JSX.Element> = {
  family: IconFamily,
  shield: IconShield,
  land: IconLand,
  scale: IconScale,
  document: IconDocument,
  check: IconCheck,
  book: IconBook,
  heart: IconHeart,
};

export function IconPhone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A15 15 0 014 6a2 2 0 012-2z" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.4 5.08L2 22l5.06-1.33A9.94 9.94 0 0012.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.1c-1.66 0-3.2-.46-4.52-1.26l-.32-.19-3 .79.8-2.93-.21-.3A8.07 8.07 0 013.94 12c0-4.46 3.63-8.08 8.08-8.08 4.46 0 8.08 3.62 8.08 8.08 0 4.46-3.62 8.1-8.08 8.1zm4.4-6.05c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.55.12-.16.24-.63.78-.77.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.35-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function IconTelegram({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.94 4.36a1.2 1.2 0 00-1.24-.19L2.85 11.24a1.1 1.1 0 00.06 2.06l4.53 1.45 1.75 5.6a1.05 1.05 0 001.85.28l2.56-3.08 4.71 3.48a1.1 1.1 0 001.74-.63l3.24-14.28a1.15 1.15 0 00-.35-1.06zM9.1 14.4l-.5 3.1-1.14-3.64L17.6 8l-8.5 6.4z" />
    </svg>
  );
}

export function IconMapPin({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

export function IconClock({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function IconChevronDown({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeWidth={base} stroke="currentColor" className={className}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}
