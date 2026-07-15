"use client";

import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  name: string;
  quote: string;
  role: string;
  rating: number;
}

export function HomeClient({ testimonials }: { testimonials: Testimonial[] }) {
  const autoplay = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-background to-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <div className="gradient-divider w-24 mx-auto mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto">Real stories from real dog owners who trusted us with their best friends.</p>
        </div>
        <Carousel plugins={[autoplay.current]} opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                <Card className="glass-card h-full">
                  <CardContent className="p-6">
                    <FontAwesomeIcon icon={faQuoteLeft} className="size-8 text-primary/20 mb-4" />
                    <p className="text-foreground mb-4 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex gap-0.5 mb-2">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <FontAwesomeIcon key={j} icon={faStar} className="size-4 text-secondary" />
                      ))}
                    </div>
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-sm text-muted-foreground">{t.role}</div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static -left-0 top-0 translate-y-0" />
            <CarouselNext className="relative static -right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
