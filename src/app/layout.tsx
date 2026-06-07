import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import FloatingWhatsApp from "@/components/ui/FloatingWhatsApp";
import SchemaMarkup from "@/components/layout/SchemaMarkup";

const cairo = Cairo({ 
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://altaqwa-factory.vercel.app'),
  title: {
    default: "مصنع التقوى للألوميتال والمطابخ - خبرة أكثر من 22 عاماً",
    template: "%s | مصنع التقوى للألوميتال والمطابخ"
  },
  description: "أفضل مصنع لتصنيع مطابخ الألوميتال، البولي لاك (Polylac)، الأكريليك، غرف الدريسنج، والشبابيك في مصر. خبرة أكثر من 22 عاماً في التصنيع المباشر والتركيب الاحترافي بضمان حقيقي.",
  keywords: ["مطابخ بولي لاك المنصورة", "تصنيع مطابخ أكريليك", "مصنع مطابخ ألوميتال", "مطابخ ألوميتال الدقهلية", "غرف دريسنج مودرن", "شبابيك ألوميتال جامبو", "أبواب ألوميتال", "مصنع التقوى", "المهندس هاني الفقي"],
  authors: [{ name: "مصنع التقوى" }],
  creator: "مصنع التقوى",
  publisher: "مصنع التقوى",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://altaqwa-factory.vercel.app",
    title: "مصنع التقوى للألوميتال والمطابخ - فخامة التنفيذ وجودة الصناعة",
    description: "أفضل مصنع لتفصيل مطابخ الألوميتال وغرف الدريسنج في مصر. خبرة 22 عاماً وضمان 20 سنة.",
    siteName: "مصنع التقوى للألوميتال",
    images: [
      {
        url: "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
        width: 1200,
        height: 630,
        alt: "مطابخ ألوميتال فاخرة - مصنع التقوى",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مصنع التقوى للألوميتال والمطابخ",
    description: "خبرة 22 عاماً في تصنيع مطابخ الألوميتال والشبابيك والأبواب في مصر.",
    images: ["/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg"],
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "MluI1cMmVOtczCvma-OfhCohDZJeizF_mi4bOvQpGxo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <head>
        <SchemaMarkup />
      </head>
      <body className={`${cairo.variable} font-sans bg-black-pure text-foreground antialiased selection:bg-gold-500/30 selection:text-gold-100 min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingContact />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
