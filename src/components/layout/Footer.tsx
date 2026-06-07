import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";
import { siteInfo, navLinks, servicesList } from "@/data/siteData";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16.11 7.5v-.01"/><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-black-rich border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-black-pure font-bold text-2xl shadow-lg shadow-gold-500/20">
                ط
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white tracking-tight leading-none">التقوى</span>
                <span className="text-sm text-gold-500 font-medium">للألوميتال والمطابخ</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-sm">
              مصنع التقوى للألوميتال والمطابخ - خبرة أكثر من 22 عاماً في تصنيع وتوريد المطابخ والألوميتال بأعلى معايير الجودة والالتزام التام بالمواعيد.
            </p>
            <div className="flex items-center gap-4">
              <a href={siteInfo.socials.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={siteInfo.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500 hover:border-gold-500 transition-all duration-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              روابط سريعة
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {navLinks.slice(0, 5).map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              خدماتنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-3">
              {servicesList.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/50 group-hover:bg-gold-400 transition-colors"></span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-bold text-white relative inline-block">
              تواصل معنا
              <span className="absolute -bottom-2 right-0 w-8 h-1 bg-gold-500 rounded-full"></span>
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteInfo.location}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <a href={`tel:${siteInfo.phone}`} className="hover:text-gold-400 transition-colors dir-ltr tracking-wider">{siteInfo.phone}</a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{siteInfo.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-right">
            جميع الحقوق محفوظة &copy; {new Date().getFullYear()} {siteInfo.name}.
          </p>
          <div className="text-gray-500 text-sm flex items-center gap-1">
            <span>صناعة مصرية متميزة</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
