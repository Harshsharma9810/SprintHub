import { ComapanyCarousel } from '@/components/functional-components/LandingPage/CompanyCarousel';
import CTASection from '@/components/functional-components/LandingPage/CTASection';
import FAQSection from '@/components/functional-components/LandingPage/FAQSection';
import FeaturesSection from '@/components/functional-components/LandingPage/FeaturesSection';
import HeroSection from '@/components/functional-components/LandingPage/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ComapanyCarousel />
      <FAQSection />
      <CTASection />

      {/* CTA
      <section className="py-28 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to take control of your work?
        </h2>
        <p className="mt-4 text-indigo-100">
          Start organizing tasks and shipping faster today to deliver strategic initiatives on time with clarity and predictability.
        </p>
        <Link
          href="/onboarding"
          className="inline-block mt-8 rounded-lg bg-white px-8 py-4 text-indigo-600 font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section> */}
    </main>
  );
}
