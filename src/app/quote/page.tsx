import QuoteClient from "./QuoteClient";

export const metadata = {
  title: `اطلب عرض سعر | احصل على مقايسة لمطبخك مجاناً`,
  description: "اطلب عرض سعر الآن من مصنع التقوى. املأ النموذج وسيتصل بك أحد مهندسينا لتحديد المقاسات وتقديم أنسب حلول الألوميتال لميزانيتك."
};

export default function QuotePage() {
  return <QuoteClient />;
}
