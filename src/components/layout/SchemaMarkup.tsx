import { faqs, servicesList, siteInfo } from "@/data/siteData";

export default function SchemaMarkup() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteInfo.url}#organization`,
    name: siteInfo.name,
    image: `${siteInfo.url}/assets/images/kitchen-luxury-cream-gold-1.jpg.jpg`,
    url: siteInfo.url,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    founder: { "@type": "Person", name: siteInfo.owner },
    address: {
      "@type": "PostalAddress",
      streetAddress: "كفر الروك",
      addressLocality: siteInfo.city,
      addressRegion: siteInfo.region,
      addressCountry: "EG",
    },
    geo: { "@type": "GeoCoordinates", latitude: 30.8288597, longitude: 31.5458039 },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "22:00",
    }],
    sameAs: [siteInfo.socials.facebook, siteInfo.socials.instagram],
    priceRange: "$$$",
    areaServed: "Egypt",
    description: "تصميم وتصنيع وتركيب مطابخ ألوميتال وبولي لاك ودريسنج وشبابيك وأبواب بخبرة أكثر من 22 عاما.",
    makesOffer: servicesList.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.description } })),
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
