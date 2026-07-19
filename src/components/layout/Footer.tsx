import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { MEDIA } from "@/data/mediaRegistry";
import { navLinks, servicesList, siteInfo } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black-rich py-14">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="relative h-12 w-12 overflow-hidden rounded-xl border border-gold-500/50">
                <Image src={MEDIA.services.kitchens} alt="" fill className="object-cover" sizes="48px" />
              </span>
              <span>
                <span className="block text-2xl font-black text-white">التقوى</span>
                <span className="block text-[10px] font-black uppercase tracking-[.22em] text-gold-500">Aluminum & Kitchens</span>
              </span>
            </Link>
            <p className="mt-5 leading-8 text-gray-400">
              {siteInfo.name} يقدم مطابخ ودريسنج وشبابيك وأبواب ألوميتال بتصنيع مباشر وتشطيب فاخر وضمان حقيقي.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="فيسبوك" className="rounded-full border border-white/10 p-3 text-gray-300 hover:border-gold-500 hover:text-gold-400"><FacebookIcon className="h-5 w-5" /></a>
              <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="إنستجرام" className="rounded-full border border-white/10 p-3 text-gray-300 hover:border-gold-500 hover:text-gold-400"><InstagramIcon className="h-5 w-5" /></a>
            </div>
          </div>

          <FooterList title="روابط سريعة" items={navLinks.slice(0, 6).map((link) => ({ label: link.name, href: link.href }))} />
          <FooterList title="الخدمات" items={servicesList.slice(0, 6).map((service) => ({ label: service.title, href: `/services#${service.id}` }))} />

          <div>
            <h2 className="text-lg font-black text-white">تواصل معنا</h2>
            <ul className="mt-5 space-y-4 text-gray-400">
              <li className="flex gap-3"><MapPin className="mt-1 h-5 w-5 shrink-0 text-gold-500" /><span>{siteInfo.location}</span></li>
              <li className="flex gap-3"><Phone className="h-5 w-5 shrink-0 text-gold-500" /><a href={`tel:${siteInfo.phone}`} dir="ltr" className="hover:text-gold-400">{siteInfo.phone}</a></li>
              <li className="flex gap-3"><Clock className="mt-1 h-5 w-5 shrink-0 text-gold-500" /><span>{siteInfo.workingHours}</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-500 md:flex md:items-center md:justify-between md:text-right">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} {siteInfo.name}.</p>
          <p className="mt-2 md:mt-0">صناعة مصرية بتفاصيل هندسية فاخرة.</p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16.5 7.5h.01" />
      <circle cx="12" cy="12" r="3.5" />
    </svg>
  );
}

function FooterList({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-lg font-black text-white">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-gray-400 hover:text-gold-400">{item.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
