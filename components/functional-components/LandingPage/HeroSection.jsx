import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen land-background flex items-center">
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm" />

      <div className="relative mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Organize work.
            <br />
            <span className="text-indigo-600">Ship faster.</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            SprintHub is a modern Kanban board that helps teams plan, track, and
            deliver work efficiently — without clutter.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/onboarding"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition"
            >
              Get Started Free
            </Link>
            <Link
              href="#features"
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-800 font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right – Kanban Preview */}
        <div className="relative">
          <Image
            // src="/kanban-preview.jpg"
            src="/dashboard_hero.png"
            alt="Kanban board preview"
            width={700}
            height={450}
            className="rounded-xl shadow-2xl border"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
