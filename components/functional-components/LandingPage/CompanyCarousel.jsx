'use client';
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { carouselImageData } from '../../../app/constants/LandingPageConstants/constants';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

export function ComapanyCarousel() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900">
          Trusted by over 60% of the Fortune 500
        </h3>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
            duration: 20,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="mt-16 w-full"
        >
          <CarouselContent className="-ml-4">
            {carouselImageData.map((item) => (
              <CarouselItem
                key={item.id}
                className="
                  pl-4
                  basis-1/2
                  sm:basis-1/3
                  md:basis-1/4
                  lg:basis-1/6
                "
              >
                <Card className="border-none shadow-sm">
                  <CardContent className="flex h-28 items-center justify-center p-6">
                    <Image
                      src={item.path}
                      alt={item.name}
                      width={140}
                      height={60}
                      className="object-contain transition hover:grayscale-0 hover:opacity-100"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Hide arrows on mobile */}
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
