import Link from "next/link";
import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-6xl px-4 ${className}`}>{children}</div>;
}

export function SectionTitle({ eyebrow, title, desc, light = false }: { eyebrow?: string; title: ReactNode; desc?: ReactNode; light?: boolean }) {
  return (
    <div className="mb-10 md:mb-12">
      {eyebrow && (
        <p className={`mb-2 text-sm font-bold tracking-widest ${light ? "text-point" : "text-navy-700"}`}>{eyebrow}</p>
      )}
      <h2 className={`text-2xl leading-snug font-extrabold md:text-4xl ${light ? "text-white" : "text-navy-950"}`}>{title}</h2>
      {desc && <p className={`mt-4 max-w-2xl text-base leading-relaxed md:text-lg ${light ? "text-navy-100/80" : "text-gray-600"}`}>{desc}</p>}
    </div>
  );
}

export function PageHero({ eyebrow, title, desc }: { eyebrow: string; title: ReactNode; desc?: ReactNode }) {
  return (
    <section className="bg-navy-900 py-16 text-white md:py-24">
      <Container>
        <p className="mb-3 text-sm font-bold tracking-widest text-point">{eyebrow}</p>
        <h1 className="text-3xl leading-tight font-extrabold md:text-5xl">{title}</h1>
        {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/80 md:text-lg">{desc}</p>}
      </Container>
    </section>
  );
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "point" | "ghost" }) {
  const styles = {
    primary: "bg-navy-800 text-white hover:bg-navy-900",
    point: "bg-point text-navy-950 hover:bg-point-dark",
    ghost: "border border-white/40 text-white hover:bg-white/10",
  }[variant];
  const cls = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-bold transition ${styles}`;
  if (href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("sms:")) {
    return <a href={href} className={cls}>{children}</a>;
  }
  return <Link href={href} className={cls}>{children}</Link>;
}

// 자료를 받기 전 비워 둔 자리
export function Placeholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-navy-100 bg-navy-50 p-6 text-center text-sm font-medium text-navy-700/60 ${className}`}>
      {label}
    </div>
  );
}
