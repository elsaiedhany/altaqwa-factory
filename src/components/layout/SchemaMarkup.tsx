import { siteInfo } from "@/data/siteData";

export default function SchemaMarkup() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://altaqwa-factory.vercel.app#organization",
    "name": siteInfo.name,
    "image": "https://altaqwa-factory.vercel.app/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg",
    "url": "https://altaqwa-factory.vercel.app",
    "telephone": siteInfo.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "السنبلاوين - كفر الروك",
      "addressLocality": "المنصورة",
      "addressRegion": "محافظة الدقهلية",
      "addressCountry": "EG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.8288597,
      "longitude": 31.5458039
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "sameAs": [
      siteInfo.socials.facebook,
      siteInfo.socials.instagram
    ],
    "priceRange": "$$$",
    "description": siteInfo.name + " - خبرة أكثر من 22 عاماً في تصنيع مطابخ البولي لاك والألوميتال، غرف الدريسنج، والشبابيك والأبواب بأعلى جودة وضمان 20 سنة.",
    "founder": {
      "@id": "https://altaqwa-factory.vercel.app#founder"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://altaqwa-factory.vercel.app#founder",
    "name": "هاني توفيق الفقي",
    "alternateName": ["المهندس هاني توفيق الفقي", "Hany Tawfik El Faqy", "Eng. Hany Tawfik El Faqy"],
    "jobTitle": "المؤسس والمشرف الفني",
    "worksFor": {
      "@id": "https://altaqwa-factory.vercel.app#organization"
    },
    "image": "https://altaqwa-factory.vercel.app/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg",
    "description": "المهندس هاني توفيق الفقي، خبرة أكثر من 22 عاماً في مجال تصنيع المطابخ والألوميتال في مصر، ومؤسس مصنع التقوى للألوميتال والمطابخ.",
    "url": "https://altaqwa-factory.vercel.app/about"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
