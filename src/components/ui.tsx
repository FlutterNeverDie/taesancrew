import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  // className에 max-w-*가 있으면 기본 폭(6xl) 대신 그걸 쓴다
  const width = /\bmax-w-/.test(className) ? "" : "max-w-6xl";
  return <div className={`mx-auto px-4 md:px-6 ${width} ${className}`}>{children}</div>;
}

export function SectionTitle({ title, desc, light = false }: { title: ReactNode; desc?: ReactNode; light?: boolean }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <h2 className={`text-[1.75rem] leading-snug font-extrabold md:text-[2.5rem] ${light ? "text-white" : "text-navy-950"}`}>{title}</h2>
      {desc && <p className={`mt-4 text-base leading-relaxed md:text-lg ${light ? "text-navy-100/80" : "text-muted"}`}>{desc}</p>}
    </div>
  );
}

export function PageHero({ title, desc }: { title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="on-dark border-b-8 border-point bg-navy-900 py-14 text-white md:py-20">
      <Container>
        <h1 className="max-w-3xl text-[2rem] leading-tight font-extrabold md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/80 md:text-lg">{desc}</p>}
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "point" | "ghost" }) {
  const styles = {
    primary: "bg-navy-800 text-white hover:bg-navy-900",
    point: "bg-point text-navy-950 hover:bg-point-dark",
    ghost: "border-2 border-white/50 text-white hover:bg-white/10",
  }[variant];
  const cls = `press inline-flex min-h-12 items-center justify-center rounded-md px-6 text-base font-bold whitespace-nowrap ${styles}`;
  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:")) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

// 자료를 받기 전 비워 둔 자리
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center border-2 border-dashed border-navy-200 bg-navy-50 p-6 text-center text-sm font-medium text-muted ${className}`}>
      {label}
    </div>
  );
}
