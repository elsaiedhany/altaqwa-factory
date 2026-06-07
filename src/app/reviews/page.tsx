import ReviewsClient from "./ReviewsClient";

export const metadata = {
  title: `آراء العملاء | ماذا يقول عملاؤنا عن مصنع التقوى`,
  description: "اقرأ تقييمات وآراء عملاء مصنع التقوى للألوميتال والمطابخ. تجارب حقيقية تعكس التزامنا بالجودة والمواعيد والتشطيب الاحترافي."
};

export default function ReviewsPage() {
  return <ReviewsClient />;
}
