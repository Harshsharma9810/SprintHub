import { ComapanyCarousel } from '@/components/functional-components/LandingPage/CompanyCarousel';
import CTASection from '@/components/functional-components/LandingPage/CTASection';
import FAQSection from '@/components/functional-components/LandingPage/FAQSection';
import FeaturesSection from '@/components/functional-components/LandingPage/FeaturesSection';
import HeroSection from '@/components/functional-components/LandingPage/HeroSection';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ComapanyCarousel />
      <FAQSection />
      <CTASection />
    </main>
  );
}
