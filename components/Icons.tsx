import type { IconKey } from "@/lib/practiceAreas";

type IconProps = { className?: string };

const base = "h-6 w-6";

export const PracticeIcon = ({ name, className }: { name: IconKey; className?: string }) => {
  const cls = className ?? base;
  const common = {
    className: cls,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "car":
      return (
        <svg {...common}>
          <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" />
          <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
          <circle cx="7" cy="16" r="0.6" />
          <circle cx="17" cy="16" r="0.6" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M2 6h11v9H2z" />
          <path d="M13 9h4l3 3v3h-7z" />
          <circle cx="6" cy="17" r="1.6" />
          <circle cx="16.5" cy="17" r="1.6" />
        </svg>
      );
    case "motorcycle":
      return (
        <svg {...common}>
          <circle cx="5.5" cy="16" r="3" />
          <circle cx="18.5" cy="16" r="3" />
          <path d="M5.5 16l3-5h5l2 3m0 0h3.5m-8.5-3H9" />
          <path d="M13.5 8h2.5l1 3" />
        </svg>
      );
    case "slip":
      return (
        <svg {...common}>
          <path d="M4 20h16" />
          <path d="M13 4l-2 4 3 2-4 4" />
          <circle cx="14" cy="3.6" r="1.2" />
          <path d="M6 20l3-3" />
        </svg>
      );
    case "security":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
          <path d="M9.5 12l1.8 1.8L15 10" />
        </svg>
      );
    case "wrongful-death":
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-4.3-9-8.4C1.4 9.9 2.7 6.5 6 6.1c1.9-.2 3.3.8 4 2 0.7-1.2 2.1-2.2 4-2 3.3.4 4.6 3.8 3 6.5C18.5 16.7 12 21 12 21z" />
        </svg>
      );
    case "rideshare":
      return (
        <svg {...common}>
          <rect x="4" y="9" width="16" height="7" rx="1.5" />
          <path d="M8 9V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          <path d="M9 16v1.5M15 16v1.5" />
          <path d="M10.5 12.5h3" />
        </svg>
      );
    case "delivery":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="11" height="9" rx="1" />
          <path d="M14 10h3.5l2.5 3v3H14z" />
          <path d="M8.5 7v4l1.5-1 1.5 1V7" />
          <circle cx="7" cy="18" r="1.4" />
          <circle cx="17" cy="18" r="1.4" />
        </svg>
      );
  }
};

export const PhoneIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M6.6 3h2.5l1.3 4-1.9 1.3a12 12 0 0 0 5.2 5.2L15 11.6l4 1.3v2.5a2 2 0 0 1-2.2 2A16 16 0 0 1 4.6 5.2 2 2 0 0 1 6.6 3z" />
  </svg>
);

export const MailIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3.5 6.5 12 13l8.5-6.5" />
  </svg>
);

export const PinIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z" />
    <circle cx="12" cy="11" r="2.2" />
  </svg>
);

export const ClockIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.5 2" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-5 w-5"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ChevronDown = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRight = ({ className }: IconProps) => (
  <svg className={className ?? "h-4 w-4"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ScaleIcon = ({ className }: IconProps) => (
  <svg className={className ?? "h-6 w-6"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M12 3v18M7 21h10M5 7h14M5 7l-2.5 6a3 3 0 0 0 5 0zM19 7l-2.5 6a3 3 0 0 0 5 0z" />
    <path d="M12 5.5 5 7M12 5.5 19 7" />
  </svg>
);
