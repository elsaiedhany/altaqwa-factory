"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, PhoneCall, X } from "lucide-react";
import { MEDIA } from "@/data/mediaRegistry";
import { navLinks, siteInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition", isScrolled ? "border-b border-white/10 bg-black-pure/92 py-3 shadow-2xl backdrop-blur-xl" : "bg-gradient-to-b from-black-pure/85 to-transparent py-5")}>
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="العودة إلى الصفحة الرئيسية">
          <span className="relative h-11 w-11 overflow-hidden rounded-xl border border-gold-500/50 md:h-12 md:w-12">
            <Image src={MEDIA.services.kitchens} alt="" fill className="object-cover" sizes="48px" priority />
          </span>
          <span className="leading-none">
            <span className="block text-2xl font-black text-white">التقوى</span>
            <span className="mt-1 block text-[10px] font-black uppercase tracking-[.24em] text-gold-500">Aluminum & Kitchens</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1 xl:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return <Link key={link.href} href={link.href} className={cn("rounded-full px-4 py-2 text-sm font-bold transition", isActive ? "bg-gold-500 text-black-pure" : "text-gray-300 hover:bg-white/10 hover:text-white")}>{link.name}</Link>;
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a href={`tel:${siteInfo.phone}`} className="text-left font-black text-white hover:text-gold-400" dir="ltr">{siteInfo.phone}</a>
          <Link href="/quote" className="rounded-full bg-gold-500 px-6 py-3 font-black text-black-pure hover:bg-gold-400">طلب تسعير</Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a href={`tel:${siteInfo.phone}`} className="rounded-xl bg-gold-500 p-3 text-black-pure" aria-label="اتصل الآن"><PhoneCall className="h-5 w-5" /></a>
          <button type="button" className="rounded-xl border border-white/10 bg-white/10 p-3 text-white" onClick={() => setIsOpen((value) => !value)} aria-expanded={isOpen} aria-controls="mobile-menu" aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}>{isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
        </div>
      </div>

      <div id="mobile-menu" className={cn("fixed inset-0 top-0 z-40 bg-black-pure/98 pt-24 transition lg:hidden", isOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0")}>
        <nav className="container mx-auto flex flex-col gap-2 px-4" aria-label="قائمة الجوال">
          {navLinks.map((link) => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="rounded-2xl border border-white/10 px-5 py-4 text-xl font-black text-white">{link.name}</Link>)}
          <Link href="/quote" onClick={() => setIsOpen(false)} className="mt-4 rounded-2xl bg-gold-500 px-5 py-4 text-center text-xl font-black text-black-pure">اطلب مقايسة مجانية</Link>
        </nav>
      </div>
    </header>
  );
}
