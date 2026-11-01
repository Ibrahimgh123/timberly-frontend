"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { StoreBadge } from "@/components/shared/store-badge";

export type HeroSlideData = {
  id: string;
  image: string;
  imageAlt: string;
  badge: string;
  title: string;
  description: string;
  buttonLabel: string;
  href: string;
  note?: string;
};

type HeroSlideProps = {
  slide: HeroSlideData;
  priority?: boolean;
};

export function HeroSlide({ slide, priority = false }: HeroSlideProps) {
  const reducedMotion = useReducedMotion();

  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reducedMotion ? 1 : 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          priority={priority}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-linear-to-r from-brand-forest/90 via-brand-forest/45 to-brand-forest/10" />

      <motion.div
        initial={{
          opacity: 0,
          y: reducedMotion ? 0 : 18,
        }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reducedMotion ? 0 : 0.45,
          delay: reducedMotion ? 0 : 0.12,
          ease: "easeOut",
        }}
        className="relative z-10 flex h-full max-w-2xl flex-col justify-center px-12 pb-12 pt-8 sm:px-16 lg:px-20"
      >
        <StoreBadge
          backgroundClassName="bg-brand-sand"
          textClassName="text-brand-forest"
          className="mb-4"
        >
          {slide.badge}
        </StoreBadge>

        <h2 className="max-w-xl font-serif text-3xl leading-[1.05] tracking-tight text-surface-white sm:text-4xl lg:text-5xl">
          {slide.title}
        </h2>

        <p className="mt-4 max-w-md text-sm leading-6 text-surface-white/80">
          {slide.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href={slide.href}
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-surface-white px-7 text-xs font-semibold uppercase tracking-wider text-brand-forest transition-colors hover:bg-brand-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-white"
          >
            {slide.buttonLabel}
          </Link>

          {slide.note && (
            <span className="text-[10px] uppercase tracking-wide text-surface-white/80">
              {slide.note}
            </span>
          )}
        </div>
      </motion.div>
    </div>
  );
}
