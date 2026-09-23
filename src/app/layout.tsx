import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
import SchemaMarkup from "@/components/layout/SchemaMarkup";
import { Analytics } from "@vercel/analytics/next";
import { siteInfo } from "@/data/siteData";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const ogImage = "/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg";

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: `${siteInfo.name} | مطابخ ألوميتال وبولي لاك فاخرة`,
    template: `%s | ${siteInfo.shortName}`,
  },
  description:
    "مصنع متخصص في تصميم وتصنيع وتركيب مطابخ الألوميتال والبولي لاك، الدريسنج روم، الشبابيك والأبواب في الدقهلية وكل مصر.",
  keywords: [
    ...siteInfo.seoKeywords,
    "مصنع مطابخ بالمنصورة",
    "مطابخ بولي لاك تركي",
    "اسعار مطابخ الالوميتال 2025",
    "اسعار مطابخ البولي لاك في مصر",
    "مطابخ كلادينج الدقهلية",
    "دريسنج روم المنصورة",
    "شبابيك ألوميتال جامبو عازل للصوت",
    "هاني توفيق الفقي",
  ],
  authors: [{ name: siteInfo.owner }],
  creator: siteInfo.shortName,
  publisher: siteInfo.shortName,
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteInfo.url,
    siteName: siteInfo.name,
    title: `${siteInfo.name} | تنفيذ فاخر بضمان حقيقي 20 سنة`,
    description: "مطابخ ودريسنج وشبابيك ألوميتال بتصنيع مباشر وخبرة أكثر من 22 عاما بإشراف م/ هاني توفيق الفقي.",
    images: [{ url: ogImage, width: 1200, height: 630, alt: "مطبخ فاخر من مصنع التقوى" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteInfo.name,
    description: "تصنيع وتركيب مطابخ ألوميتال وبولي لاك بخبرة أكثر من 22 عاما.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "EG-DK",
    "geo.placename": "Al-Sinbillawain, Mansoura, Dakahlia",
    "geo.position": "30.82886;31.54580",
    ICBM: "30.82886, 31.54580",
  },
  verification: { google: "MluI1cMmVOtczCvma-OfhCohDZJeizF_mi4bOvQpGxo" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className="dark scroll-smooth">
      <body className={`${cairo.variable} min-h-screen overflow-x-hidden bg-black-pure font-sans text-foreground antialiased selection:bg-gold-500/30 selection:text-gold-100`}>
        <SchemaMarkup />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}
