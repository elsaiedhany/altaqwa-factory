import Link from "next/link";
import type { ReactNode } from "react";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
};

export default function PageHeader({ eyebrow, title, description, actions }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-black-rich pt-32 pb-14 md:pt-36 md:pb-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 text-center md:px-6">
        <p className="mb-4 text-sm font-black text-gold-500">{eyebrow}</p>
        <h1 className="mx-auto max-w-5xl text-4xl font-black leading-tight text-white md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl">{description}</p>
        {actions ? <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">{actions}</div> : null}
      </div>
    </section>
  );
}

export function PrimaryLink({ href, children }: { href: string; children: ReactNode }) {
  return <Link href={href} className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-500 px-7 py-3 font-black text-black-pure transition hover:bg-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-300">{children}</Link>;
}

export function SecondaryAnchor({ href, children }: { href: string; children: ReactNode }) {
  return <a href={href} className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/15 px-7 py-3 font-bold text-white transition hover:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-300">{children}</a>;
}
