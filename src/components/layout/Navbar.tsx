"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, PhoneCall } from "lucide-react";
import { navLinks, siteInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        isScrolled 
          ? "bg-black-pure/95 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black" 
          : "bg-gradient-to-b from-black-pure/90 to-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 flex items-center justify-center text-black-pure font-black text-2xl shadow-lg shadow-gold-500/20 group-hover:shadow-gold-500/40 transition-all transform group-hover:rotate-6">
            ط
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-white tracking-tighter leading-none group-hover:text-gold-400 transition-colors uppercase">التقوى</span>
            <span className="text-[10px] text-gold-500 font-black tracking-[0.2em] uppercase">Aluminum & Kitchens</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-5 py-2.5 text-xs font-black rounded-full transition-all duration-300 tracking-wide",
                  isActive 
                    ? "text-black-pure bg-gold-500 shadow-lg shadow-gold-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href={`tel:${siteInfo.phone}`}
            className="flex flex-col items-end group"
          >
            <span className="text-[10px] text-gray-500 font-bold tracking-widest uppercase mb-0.5">اتصل بنا الآن</span>
            <div className="flex items-center gap-2 text-xl font-black text-white group-hover:text-gold-500 transition-colors dir-ltr tracking-tighter">
              <PhoneCall className="w-5 h-5 text-gold-500 animate-pulse" />
              <span>{siteInfo.phone}</span>
            </div>
          </a>
          <Link
            href="/quote"
            className="bg-gold-500 hover:bg-gold-400 text-black-pure font-black py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 text-sm uppercase tracking-tighter"
          >
            اطلب تسعير
          </Link>
        </div>

        {/* Mobile Toggle & Phone Icon */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href={`tel:${siteInfo.phone}`} className="p-3 rounded-xl bg-gold-500 text-black-pure shadow-lg shadow-gold-500/20">
            <PhoneCall className="w-6 h-6" />
          </a>
          <button 
            className="p-3 rounded-xl bg-white/5 text-gray-300 border border-white/10"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 top-0 left-0 w-full h-screen bg-black-pure/98 backdrop-blur-3xl z-[90] lg:hidden transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
        <div className="flex flex-col h-full overflow-y-auto pb-32 p-8 gap-10 pt-28">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-2xl font-black p-4 rounded-2xl transition-all flex items-center justify-between group",
                    isActive 
                      ? "text-gold-500 bg-gold-500/5 border border-gold-500/20 px-6" 
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <span>{link.name}</span>
                  <div className={cn("w-1.5 h-1.5 rounded-full bg-gold-500 scale-0 group-hover:scale-100 transition-transform", isActive && "scale-100")}></div>
                </Link>
              );
            })}
          </nav>
          
          <div className="mt-auto flex flex-col gap-6">
            <a 
              href={`tel:${siteInfo.phone}`}
              className="flex items-center justify-center gap-4 p-6 rounded-[2rem] bg-gold-500 text-black-pure font-black text-2xl shadow-2xl shadow-gold-500/20 border border-gold-400"
            >
              <PhoneCall className="w-8 h-8" />
              <span className="tracking-tighter dir-ltr">{siteInfo.phone}</span>
            </a>
            <Link
              href="/quote"
              className="flex items-center justify-center p-6 rounded-[2rem] bg-white/5 text-white font-black text-xl border border-white/10"
            >
              اطلب عرض سعر مجاني
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
