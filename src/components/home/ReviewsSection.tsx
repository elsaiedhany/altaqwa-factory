import Link from "next/link";
import { Star } from "lucide-react";
import { testimonials } from "@/data/siteData";

export default function ReviewsSection() {
  return (
    <section className="bg-black-rich py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="mb-3 text-sm font-black text-gold-500">آراء العملاء</p>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            ثقة مبنية على تسليمات حقيقية
          </h2>
          <div className="mt-6 flex justify-center gap-1" aria-label="تقييم خمسة نجوم">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-gold-500 text-gold-500" />
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <figure key={review.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-7">
              <div className="mb-5 flex gap-1">
                {Array.from({ length: review.rating }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <blockquote className="min-h-28 text-lg leading-8 text-gray-200">
                “{review.content}”
              </blockquote>
              <figcaption className="mt-7 border-t border-white/10 pt-5">
                <p className="font-black text-white">{review.name}</p>
                <p className="mt-1 text-sm text-gold-400">{review.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/reviews" className="font-bold text-gold-300 hover:text-gold-200">
            مشاهدة المزيد من آراء العملاء
          </Link>
        </div>
      </div>
    </section>
  );
}
