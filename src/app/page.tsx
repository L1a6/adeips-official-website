import HeroSection from '@/components/home/HeroSection';
import TransformSection from '@/components/home/TransformSection';
import IconicMoments from '@/components/home/IconicMoments';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import EnrollSection from '@/components/home/EnrollSection';
import FAQSection from '@/components/home/FAQSection';
import ProgressiveScroll from '@/components/home/ProgressiveScroll';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <TransformSection />
      <IconicMoments />
      <TestimonialsSection />
      <EnrollSection />
      <FAQSection />
      <ProgressiveScroll />
    </main>
  );
}