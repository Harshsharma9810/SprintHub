import { Button } from '@/components/ui/button';
import { Arrow } from '@radix-ui/react-popover';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const CTASection = () => {
  return (
    <section className="py-24 bg-indigo-600 text-white text-center">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        Take control of your work with SprintHub
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-indigo-100">
        Plan smarter, visualize progress, and help your team ship faster with
        clarity, focus, and confidence — all in one powerful workspace.
      </p>

      <Link
        href="/onboarding"
        //     className="inline-flex items-center justify-center mt-10 rounded-lg
        //   bg-white px-10 py-4 text-indigo-600 font-semibold
        //   hover:bg-gray-100 transition-colors shadow-lg"
        //   >
      >
        <Button
          size="lg"
          className="animate-bounce inline-flex items-center justify-center mt-10 rounded-lg
      bg-white px-10 py-6 text-indigo-600 font-semibold
      hover:bg-gray-100 transition-colors shadow-lg"
        >
          Get Started for Free
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Button>
      </Link>

      <p className="mt-4 text-sm text-indigo-200">No credit card required</p>
    </section>
  );
};

export default CTASection;
