import { siteInfo } from "@/data/siteData";

export default function StatsSection() {
  return (
    <section className="border-y border-white/10 bg-black-pure py-12">
      <div className="container mx-auto px-4 md:px-6">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {siteInfo.stats.map((stat) => (
            <div key={stat.id} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 md:p-7">
              <stat.icon className="mb-5 h-8 w-8 text-gold-500" />
              <dt className="text-sm font-bold leading-6 text-gray-400">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-black text-white md:text-4xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
