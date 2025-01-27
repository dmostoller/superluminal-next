"use client";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { testimonials } from "@/config/testimonials";
import Autoplay from "embla-carousel-autoplay";

export interface Testimonial {
  text: string;
  author?: string;
}

export function Testimonials() {
  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent z-10" />

      <Carousel
        opts={{
          align: "center",
          loop: true,
          skipSnaps: false,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={index}
              className="pl-4 basis-full sm:basis-4/5 md:basis-2/3 lg:basis-1/2"
            >
              <Card className="p-4 md:p-6">
                <blockquote className="text-sm md:text-base text-muted-foreground">
                  {testimonial.text}
                </blockquote>
                {testimonial.author && (
                  <p className="mt-2 md:mt-4 text-sm md:text-base font-medium">
                    {testimonial.author}
                  </p>
                )}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
