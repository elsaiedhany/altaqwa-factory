import { faqs, servicesList, siteInfo } from "@/data/siteData";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "FurnitureStore"],
    "@id": `${siteInfo.url}#organization`,
    name: siteInfo.name,
    alternateName: ["مصنع التقوى", "التقوى للألوميتال والمطابخ", "Al Taqwa Kitchens"],
    image: [
      `${siteInfo.url}/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg`,
      `${siteInfo.url}/assets/images/eng-hany-tawfik-el-faqy-ceo-taqwa.jpg.jpg`,
      `${siteInfo.url}/assets/images/kitchen-modern-wood-cream-1.jpg.jpg`,
    ],
    url: siteInfo.url,
    telephone: "+201003515207",
    email: siteInfo.email,
    founder: {
      "@type": "Person",
      name: siteInfo.owner,
      jobTitle: "المؤسس والمشرف الفني العام",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "كفر الروك",
      addressLocality: siteInfo.city,
      addressRegion: siteInfo.region,
      addressCountry: "EG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.8288597,
      longitude: 31.5458039,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "09:00",
        closes: "22:00",
      },
    ],
    sameAs: [siteInfo.socials.facebook, siteInfo.socials.instagram],
    priceRange: "$$",
    currenciesAccepted: "EGP",
    paymentAccepted: "Cash, Bank Transfer, Installments",
    areaServed: [
      { "@type": "City", name: "السنبلاوين" },
      { "@type": "City", name: "المنصورة" },
      { "@type": "AdministrativeArea", name: "الدقهلية" },
      { "@type": "City", name: "ميت غمر" },
      { "@type": "City", name: "طلخا" },
      { "@type": "City", name: "دكرنس" },
      { "@type": "City", name: "بلقاس" },
      { "@type": "City", name: "دمياط" },
      { "@type": "City", name: "القاهرة الجديدة" },
      { "@type": "Country", name: "مصر" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "128",
      reviewCount: "128",
    },
    description:
      "المصنع الرائد في الدقهلية ومصر لتصميم وتصنيع وتركيب مطابخ ألوميتال وبولي لاك ويوفي لاك، دريسنج روم، وشبابيك جامبو بخبرة تتجاوز 22 عاما وضمان 20 سنة بإشراف م/ هاني توفيق الفقي.",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "خدمات ومنتجات مصنع التقوى",
      itemListElement: servicesList.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  };

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: siteInfo.url },
      { "@type": "ListItem", position: 2, name: "المشاريع", item: `${siteInfo.url}/projects` },
      { "@type": "ListItem", position: 3, name: "الخدمات", item: `${siteInfo.url}/services` },
      { "@type": "ListItem", position: 4, name: "حاسبة الأسعار", item: `${siteInfo.url}/quote` },
      { "@type": "ListItem", position: 5, name: "تواصل معنا", item: `${siteInfo.url}/contact` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
