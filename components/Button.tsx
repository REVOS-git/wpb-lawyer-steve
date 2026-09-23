import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "amber" | "sapphire" | "outline" | "ghost";

const styles: Record<Variant, string> = {
  amber:
    "bg-amber text-white hover:bg-amber-dark shadow-sm hover:shadow-md",
  sapphire:
    "bg-sapphire text-white hover:bg-sapphire-dark shadow-sm hover:shadow-md",
  outline:
    "border-2 border-sapphire text-sapphire hover:bg-sapphire hover:text-white",
  ghost:
    "text-sapphire hover:text-amber-dark",
};

const sizeCls = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

type BaseProps = {
  variant?: Variant;
  size?: keyof typeof sizeCls;
  className?: string;
};

export function Button({
  href,
  variant = "amber",
  size = "md",
  className = "",
  children,
  ...rest
}: BaseProps & { href: string; children: React.ReactNode } & Omit<ComponentProps<typeof Link>, "href">) {
  const cls = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 ${styles[variant]} ${sizeCls[size]} ${className}`;
  const external = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");
  if (external) {
    return (
      <a href={href} className={cls} {...(rest as ComponentProps<"a">)}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}
