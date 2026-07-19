import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { servicesList } from "@/data/siteData";

export default function ServicesPreview() {
  return (
    <section className="bg-black-rich py-20 md:py-28" id="services-preview">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-black text-gold-500">خدمات مصنع التقوى</p>
            <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
              حلول متكاملة من التصميم وحتى التركيب
            </h2>
          </div>
          <Link href="/services" className="inline-flex items-center gap-2 font-bold text-gold-300 hover:text-gold-200">
            عرض كل الخدمات
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {servicesList.map((service) => (
            <article key={service.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-pure/80 to-transparent" />
              </div>
              <div className="p-6">
                <service.icon className="mb-4 h-8 w-8 text-gold-500" />
                <h3 className="text-2xl font-black text-white">{service.title}</h3>
                <p className="mt-3 leading-8 text-gray-400">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
