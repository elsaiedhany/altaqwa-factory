import { siteInfo } from "@/data/siteData";
import { allVideos } from "@/data/mediaInventory";
import { MEDIA } from "@/data/mediaRegistry";
import { Play, Video as VideoIcon } from "lucide-react";

export const metadata = {
  title: `فيديوهات حقيقية من المصنع | معاينة مباشرة للجودة`,
  description: "شاهد فيديوهات واقعية لخطوط إنتاج مصنع التقوى، وعمليات تركيب مطابخ الألوميتال، ومعاينة حية لجودة التشطيب والخامات."
};

export default function VideosPage() {
  return (
    <div className="pt-24 pb-12 md:pb-20">
      <section className="bg-black-rich py-12 md:py-20 relative overflow-hidden border-b border-white/5">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gold-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">فيديوهات واقعية</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto text-balance font-medium">
            شاهد الجودة بنفسك من خلال لقطات حية من داخل المصنع ومواقع التركيب المختلفة.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black-pure">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allVideos.map((video) => (
              <div key={video.id} className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-gold-500/30 transition-all duration-500">
                <div className="relative aspect-video">
                  <video 
                    src={video.src} 
                    className="w-full h-full object-cover"
                    controls
                    poster={MEDIA.factory.hero}
                  />
                  <div className="absolute inset-0 bg-black-pure/40 group-hover:opacity-0 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center text-black-pure shadow-2xl">
                      <Play className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3 text-gold-500 text-xs font-bold uppercase tracking-widest">
                    <VideoIcon className="w-4 h-4" />
                    <span>{
                      video.category === "factory" ? "جولة في المصنع" :
                      video.category === "machine" ? "تكنولوجيا التصنيع" : "تسليم مشروع"
                    }</span>
                  </div>
                  <h3 className="text-2xl font-black text-white group-hover:text-gold-400 transition-colors mb-6 leading-tight">
                    {video.title}
                  </h3>
                  
                  <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                    <a 
                      href={`https://wa.me/${siteInfo.whatsapp}?text=أريد الاستفسار عن المطبخ في هذا الفيديو: ${video.title}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-gold-500 hover:text-black-pure text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 border border-white/10 hover:border-gold-500"
                    >
                      استفسر عن هذا التصميم
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

