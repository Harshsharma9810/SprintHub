import { ComapanyCarousel } from '@/components/functional-components/LandingPage/CompanyCarousel';
import FeaturesSection from '@/components/functional-components/LandingPage/FeaturesSection';
import HeroSection from '@/components/functional-components/LandingPage/HeroSection';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <FeaturesSection />
      <ComapanyCarousel />

      {/* CTA */}
      <section className="py-28 bg-indigo-600 text-white text-center">
        <h2 className="text-4xl font-bold">
          Ready to take control of your work?
        </h2>
        <p className="mt-4 text-indigo-100">
          Start organizing tasks and shipping faster today.
        </p>
        <Link
          href="/onboarding"
          className="inline-block mt-8 rounded-lg bg-white px-8 py-4 text-indigo-600 font-semibold hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}

const steps = [
  {
    title: 'Create a board',
    desc: 'Set up a Kanban board for your project in seconds.',
  },
  {
    title: 'Add & move tasks',
    desc: 'Track progress visually by moving tasks across columns.',
  },
  {
    title: 'Ship with confidence',
    desc: 'Know exactly what’s done and what’s next.',
  },
];
