import QuoteClient from "./QuoteClient";

export const metadata = {
  title: "اطلب مقايسة وتسعير مجاني",
  description: "اطلب مقايسة وتسعير مجاني لمطبخك أو أعمال الألوميتال من مصنع التقوى. فريقنا الفني جاهز لخدمتك في كافة المحافظات بأفضل الأسعار.",
};

export default function QuotePage() {
  return <QuoteClient />;
}
