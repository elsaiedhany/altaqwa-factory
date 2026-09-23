"use client";

import { useState, useId } from "react";
import { Check, Sparkles, MessageCircle, Phone, RotateCcw, ShieldCheck, Ruler } from "lucide-react";
import { siteInfo } from "@/data/siteData";

interface MaterialOption {
  id: string;
  name: string;
  badge: string;
  desc: string;
  basePricePerMeter: number;
}

const MATERIALS: MaterialOption[] = [
  {
    id: "polylac",
    name: "بولي لاك تركي فاخر (Polylac)",
    badge: "الأكثر طلباً وفخامة",
    desc: "أعلى درجات اللمعان ومقاومة الخدش والحرارة والماء، مع مظهر زجاجي ملكي.",
    basePricePerMeter: 7200,
  },
  {
    id: "uv-lac",
    name: "يوفي لاك حديث (UV Lac)",
    badge: "عصري وأنيق",
    desc: "ألوان مطفية أو لامعة بمقاومة فائقة للرطوبة وسهولة تنظيف استثنائية.",
    basePricePerMeter: 6800,
  },
  {
    id: "cladding",
    name: "ألوميتال كلادينج دبل ثقيل",
    badge: "الأقوى عمراً وتحملاً",
    desc: "شيت ألومنيوم دبل مقاوم للحرائق والرطوبة وعوامل الجو مع شاسيه مدعم.",
    basePricePerMeter: 6200,
  },
  {
    id: "khashem",
    name: "خشمونيوم ملكي قطاع خاص",
    badge: "فخامة الخشب مع متانة الألوميتال",
    desc: "مظهر الخشب الطبيعي الدافئ مع شاسيه ألوميتال مقاوم للمياه تماماً.",
    basePricePerMeter: 6500,
  },
  {
    id: "fiber",
    name: "ألوميتال فايبر جلاس معتمد",
    badge: "اقتصادي وعملي",
    desc: "مقاوم للمياه 100%، عملي وسهل الصيانة مع قطاعات شريف علي حسن الأصلية.",
    basePricePerMeter: 4800,
  },
  {
    id: "dressing",
    name: "دريسنج روم مودرن (Dressing Room)",
    badge: "تنظيم متكامل",
    desc: "تقسيمات ذكية بالمليمتر، وحدات أحذية وإكسسوارات مع مرايا وإضاءة مدمجة.",
    basePricePerMeter: 5800,
  },
  {
    id: "jumbo",
    name: "شبابيك وأبواب ألوميتال جامبو عازل",
    badge: "عزل صوت وأتربة",
    desc: "قطاعات ثقيلة بزجاج دبل جورجيا عازل للصوت والحرارة والأتربة.",
    basePricePerMeter: 4800,
  },
];

interface LayoutOption {
  id: string;
  name: string;
  iconText: string;
  factor: number;
  desc: string;
}

const LAYOUTS: LayoutOption[] = [
  { id: "straight", name: "مستقيم (I-Shape)", iconText: "—", factor: 1.0, desc: "جدار واحد، مثالي للمساحات الضيقة أو الطولية" },
  { id: "l-shape", name: "حرف L زاوية", iconText: "⌐", factor: 1.05, desc: "استغلال مثالي للزاوية ومثلث حركة عملي" },
  { id: "u-shape", name: "حرف U ثلاثة جدران", iconText: "⊔", factor: 1.1, desc: "أقصى سعة تخزينية ومساحة عمل واسعة" },
  { id: "island", name: "مطبخ مع جزيرة (Island)", iconText: "⊞", factor: 1.15, desc: "فخامة عصرية ومساحة إضافية للطهي أو تناول الطعام" },
];

interface AccessoryOption {
  id: string;
  name: string;
  price: number;
}

const ACCESSORIES: AccessoryOption[] = [
  { id: "blum", name: "مفصلات وسكك بلوم نمساوي أصلية سوفت كلوز", price: 4000 },
  { id: "led", name: "إضاءة ليد بروفايل مدمجة بحساس لمس ذكي", price: 2500 },
  { id: "magic-corner", name: "وحدة ماجيك كورنر وترولي توابل استانلس 304", price: 4500 },
  { id: "aluminum-skirting", name: "وزرة ألومنيوم سفلية مانعة لتسرب المياه", price: 1500 },
];

export default function KitchenEstimator() {
  const [selectedMaterial, setSelectedMaterial] = useState<string>("polylac");
  const [selectedLayout, setSelectedLayout] = useState<string>("l-shape");
  const [sqMeters, setSqMeters] = useState<number>(6);
  const [selectedAccessories, setSelectedAccessories] = useState<string[]>(["blum", "led"]);
  const metersInputId = useId();

  const currentMaterial = MATERIALS.find((m) => m.id === selectedMaterial) || MATERIALS[0];
  const currentLayout = LAYOUTS.find((l) => l.id === selectedLayout) || LAYOUTS[0];

  const toggleAccessory = (id: string) => {
    setSelectedAccessories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const accessoriesTotal = selectedAccessories.reduce((sum, accId) => {
    const acc = ACCESSORIES.find((a) => a.id === accId);
    return sum + (acc ? acc.price : 0);
  }, 0);

  // Calculation based on Square Meters (المتر المربع)
  const baseCost = currentMaterial.basePricePerMeter * sqMeters * currentLayout.factor;
  const totalMin = Math.round((baseCost + accessoriesTotal) * 0.95);
  const totalMax = Math.round((baseCost + accessoriesTotal) * 1.08);

  const formattedAccessories = selectedAccessories
    .map((id) => ACCESSORIES.find((a) => a.id === id)?.name)
    .filter(Boolean)
    .join(" + ");

  const whatsappMessage = encodeURIComponent(
    `*طلب مقايسة وحساب تكلفة من حاسبة الموقع - مصنع التقوى*\n\n` +
      `*الخامة المختارة:* ${currentMaterial.name}\n` +
      `*سعر المتر المربع التقديري:* ${currentMaterial.basePricePerMeter.toLocaleString("ar-EG")} ج.م / م²\n` +
      `*شكل المطبخ:* ${currentLayout.name}\n` +
      `*المساحة الإجمالية:* ${sqMeters} متر مربع (م²)\n` +
      `*الإضافات:* ${formattedAccessories || "بدون إضافات إضافية"}\n` +
      `*التكلفة الإجمالية التقديرية:* ${totalMin.toLocaleString("ar-EG")} - ${totalMax.toLocaleString("ar-EG")} ج.م\n\n` +
      `أرغب في حجز موعد معاينة ورفع مقاسات هندسية مجانية لموقعي تحت إشراف م/ هاني توفيق الفقي.`
  );

  return (
    <div className="rounded-3xl border border-gold-500/30 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-6 shadow-2xl backdrop-blur-xl md:p-10">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-xs font-bold text-gold-400">
            <Sparkles className="h-3.5 w-3.5" />
            حاسبة التكلفة الذكية (أسعار 2025 / 2026)
          </span>
          <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
            احسب تكلفة مطبخك بسعر المتر المربع (م²)
          </h2>
          <p className="mt-1 text-sm text-gray-400">
            اختر الخامة والمساحة بالمتر المربع للحصول على تقدير فوري شامل التصنيع المباشر، النقل،
            التركيب، وضمان 20 سنة.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setSelectedMaterial("polylac");
            setSelectedLayout("l-shape");
            setSqMeters(6);
            setSelectedAccessories(["blum", "led"]);
          }}
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-gold-400 transition"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          إعادة ضبط
        </button>
      </div>

      <div className="space-y-8">
        {/* Step 1: Material */}
        <div>
          <label className="mb-3 block text-sm font-black text-white">
            ١. اختر نوع الخامة والتشطيب المطلوب:
          </label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {MATERIALS.map((mat) => {
              const isSelected = selectedMaterial === mat.id;
              return (
                <button
                  key={mat.id}
                  type="button"
                  onClick={() => setSelectedMaterial(mat.id)}
                  className={`group relative flex flex-col justify-between rounded-2xl border p-4 text-right transition-all duration-300 ${
                    isSelected
                      ? "border-gold-500 bg-gold-500/15 shadow-[0_0_25px_rgba(209,141,24,0.18)]"
                      : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold ${
                        isSelected ? "bg-gold-500 text-black-pure" : "bg-white/10 text-gray-300"
                      }`}
                    >
                      {mat.badge}
                    </span>
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition ${
                        isSelected ? "border-gold-500 bg-gold-500 text-black-pure" : "border-white/20"
                      }`}
                    >
                      {isSelected && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="font-black text-white text-base group-hover:text-gold-300 transition">
                        {mat.name}
                      </h3>
                    </div>
                    <span className="mt-1 inline-block text-xs font-black text-gold-400">
                      {mat.basePricePerMeter.toLocaleString("ar-EG")} ج.م / م²
                    </span>
                    <p className="mt-1.5 text-xs leading-5 text-gray-400">{mat.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2: Layout Shape */}
        <div>
          <label className="mb-3 block text-sm font-black text-white">
            ٢. اختر شكل المطبخ في منزلك:
          </label>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-4">
            {LAYOUTS.map((layout) => {
              const isSelected = selectedLayout === layout.id;
              return (
                <button
                  key={layout.id}
                  type="button"
                  onClick={() => setSelectedLayout(layout.id)}
                  className={`flex flex-col items-center justify-center rounded-2xl border p-4 text-center transition ${
                    isSelected
                      ? "border-gold-500 bg-gold-500/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20 hover:text-white"
                  }`}
                >
                  <span className="mb-2 text-2xl font-black text-gold-400">{layout.iconText}</span>
                  <span className="text-sm font-bold text-white">{layout.name}</span>
                  <span className="mt-1 text-[11px] text-gray-400">{layout.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 3: Kitchen Square Meters */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <div className="flex items-center justify-between gap-4">
            <label
              htmlFor={metersInputId}
              className="flex items-center gap-2 text-sm font-black text-white cursor-pointer"
            >
              <Ruler className="h-4 w-4 text-gold-500" />
              ٣. المساحة الإجمالية بالمتر المربع (م²):
            </label>
            <div className="flex items-baseline gap-1 text-gold-400">
              <span className="text-3xl font-black">{sqMeters}</span>
              <span className="text-sm font-bold">متر مربع (م²)</span>
            </div>
          </div>
          <div className="mt-4">
            <input
              id={metersInputId}
              type="range"
              min="3"
              max="16"
              step="0.5"
              value={sqMeters}
              onChange={(e) => setSqMeters(parseFloat(e.target.value))}
              aria-label="المساحة الإجمالية بالمتر المربع"
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-white/10 accent-gold-500"
            />
            <div className="mt-2 flex justify-between text-[11px] font-bold text-gray-400">
              <span>٣ م² (مطبخ ميني)</span>
              <span>٦ - ٨ م² (مطبخ شقة متوسط)</span>
              <span>١٦ م² (مطبخ فيلا واسع)</span>
            </div>
          </div>
        </div>

        {/* Step 4: Accessories */}
        <div>
          <label className="mb-3 block text-sm font-black text-white">
            ٤. إكسسوارات اختيارية وميزات إضافية:
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            {ACCESSORIES.map((acc) => {
              const isChecked = selectedAccessories.includes(acc.id);
              return (
                <button
                  key={acc.id}
                  type="button"
                  onClick={() => toggleAccessory(acc.id)}
                  className={`flex items-center justify-between rounded-xl border p-3.5 text-right transition ${
                    isChecked
                      ? "border-gold-500/60 bg-gold-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-gray-300 hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition ${
                        isChecked ? "border-gold-500 bg-gold-500 text-black-pure" : "border-white/20"
                      }`}
                    >
                      {isChecked && <Check className="h-3.5 w-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-sm font-bold">{acc.name}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Price Output & Instant Action */}
        <div className="rounded-3xl border border-gold-500/40 bg-gradient-to-r from-gold-500/20 via-black-pure to-gold-500/20 p-6 md:p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-400">
                التقدير الإجمالي الشامل للتصنيع والتركيب والضمان 20 سنة:
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl font-black text-white md:text-5xl">
                  {totalMin.toLocaleString("ar-EG")} - {totalMax.toLocaleString("ar-EG")}
                </span>
                <span className="text-lg font-bold text-gold-400">جنيه مصري</span>
              </div>
              <p className="mt-2 text-xs text-gray-400 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-gold-500 shrink-0" />
                سعر المتر المربع ({currentMaterial.basePricePerMeter.toLocaleString("ar-EG")} ج.م / م²)
                يشمل الخامات الأصلية والتجميع والتركيب بالدقهلية ومصر.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`https://wa.me/${siteInfo.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-black text-black-pure shadow-lg shadow-gold-500/25 transition hover:bg-gold-400 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-gold-300"
              >
                <MessageCircle className="h-5 w-5" />
                إرسال المقايسة للمهندس هاني
              </a>
              <a
                href={`tel:${siteInfo.phone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white transition hover:border-gold-500/60 focus:outline-none focus:ring-2 focus:ring-gold-300"
              >
                <Phone className="h-4 w-4" />
                اتصال مباشر
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
