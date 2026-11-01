"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import { cn } from "@/lib/utils";
import { HeroSlide, type HeroSlideData } from "./hero-slide";

type HeroSliderProps = {
  slides: HeroSlideData[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reducedMotion = useReducedMotion();

  if (slides.length === 0) return null;

  const index = activeIndex % slides.length;
  const activeSlide = slides[index];
  const hasMultipleSlides = slides.length > 1;

  function changeSlide(direction: number) {
    setActiveIndex(
      (current) =>
        (current + direction + slides.length) % slides.length,
    );
  }

  const arrowClassName =
    "absolute top-1/2 z-20 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-surface-white text-brand-forest shadow-sm transition-colors hover:bg-brand-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-white";

  return (
    <section className="px-4 py-4 lg:px-8">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured collections"
        tabIndex={0}
        onKeyDown={(event) => {
          if (
            event.target !== event.currentTarget ||
            !hasMultipleSlides
          ) {
            return;
          }

          if (event.key === "ArrowRight") {
            event.preventDefault();
            changeSlide(1);
          }

          if (event.key === "ArrowLeft") {
            event.preventDefault();
            changeSlide(-1);
          }
        }}
        className="relative h-[500px] overflow-hidden rounded-xl bg-brand-forest sm:h-[620px] lg:h-[660px]"
      >
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: reducedMotion ? 0 : 0.45,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
          >
            <HeroSlide
              slide={activeSlide}
              priority={index === 0}
            />
          </motion.div>
        </AnimatePresence>

        {hasMultipleSlides && (
          <>
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              aria-label="Previous slide"
              className={cn(arrowClassName, "left-3 sm:left-4")}
            >
              <ChevronLeft className="size-4" />
            </button>

            <button
              type="button"
              onClick={() => changeSlide(1)}
              aria-label="Next slide"
              className={cn(arrowClassName, "right-3 sm:right-4")}
            >
              <ChevronRight className="size-4" />
            </button>

            <div
              aria-label="Choose slide"
              className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center rounded-full bg-neutral-black/80 px-2"
            >
              {slides.map((slide, slideIndex) => (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide ${slideIndex + 1}`}
                  aria-current={
                    index === slideIndex ? "true" : undefined
                  }
                  onClick={() => setActiveIndex(slideIndex)}
                  className="flex h-8 min-w-8 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-surface-white"
                >
                  <span
                    className={cn(
                      "h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none",
                      index === slideIndex
                        ? "w-5 bg-surface-white"
                        : "w-1.5 bg-surface-white/50",
                    )}
                  />
                </button>
              ))}
            </div>
          </>
        )}

        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {activeSlide.title}
        </span>
      </div>
    </section>
  );
}