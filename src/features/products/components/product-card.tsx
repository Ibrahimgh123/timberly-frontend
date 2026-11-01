"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";

import { cn } from "@/lib/utils";
import { Font11GrayMedium } from "@/components/shared/typography";
import type { Product } from "../types/product";

type ProductCardProps = {
  product: Product;
  locale?: "en" | "ar";
  isWishlisted?: boolean;
  onToggleWishlist?: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
};

const badges = {
  bestseller: {
    label: "Bestseller",
    className: "bg-brand-sand text-brand-forest",
  },
  custom: {
    label: "Custom sizing available",
    className: "bg-surface-stone text-brand-forest",
  },
  new: {
    label: "New",
    className: "bg-brand-forest text-surface-white",
  },
} as const;

export function ProductCard({
  product,
  locale = "en",
  isWishlisted = false,
  onToggleWishlist,
  onQuickAdd,
}: ProductCardProps) {
  const badge = product.badge ? badges[product.badge] : null;

  const price = new Intl.NumberFormat(
    locale === "ar" ? "ar-LB" : "en-US",
    {
      style: "currency",
      currency: product.currency,
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    },
  ).format(product.price);

  return (
    <article className="group overflow-hidden rounded-xl border border-outline-warm bg-surface-white">
      <div className="relative h-[360px] overflow-hidden bg-surface-stone">
        <Link
          href={`/${locale}/products/${product.slug}`}
          aria-label={`View ${product.name}`}
          className="absolute inset-0"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
          />
        </Link>

        {badge && (
          <span
            className={cn(
              "pointer-events-none absolute start-3 top-3 max-w-[calc(100%-64px)] rounded-sm px-2 py-1 text-[10px] font-semibold uppercase leading-tight tracking-wide",
              badge.className,
            )}
          >
            {badge.label}
          </span>
        )}

        <button
          type="button"
          aria-label={
            isWishlisted
              ? `Remove ${product.name} from wishlist`
              : `Save ${product.name} to wishlist`
          }
          aria-pressed={isWishlisted}
          disabled={!onToggleWishlist}
          onClick={() => onToggleWishlist?.(product)}
          className="absolute end-3 top-3 flex size-9 items-center justify-center rounded-full bg-surface-white text-brand-forest transition-colors enabled:hover:bg-surface-stone disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-walnut"
        >
          <Heart
            className={cn(
              "size-[18px]",
              isWishlisted && "fill-brand-forest",
            )}
            strokeWidth={1.7}
          />
        </button>
      </div>

      <div className="p-4">
        <Font11GrayMedium className="mb-2 block truncate uppercase tracking-normal">
          {product.description}
        </Font11GrayMedium>

        <h3 className="font-serif text-lg leading-6 text-brand-forest">
          <Link
            href={`/${locale}/products/${product.slug}`}
            className="line-clamp-2 transition-colors hover:text-brand-walnut"
          >
            {product.name}
          </Link>
        </h3>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-outline-warm pt-3">
          <span className="text-base font-semibold tabular-nums text-brand-forest">
            {price}
          </span>

          <button
            type="button"
            disabled={!onQuickAdd}
            onClick={() => onQuickAdd?.(product)}
            className="inline-flex min-h-9 items-center gap-1.5 rounded-sm bg-brand-forest px-3 text-xs text-surface-white transition-colors enabled:hover:bg-brand-walnut disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-walnut"
          >
            <ShoppingBag className="size-3.5" />
            Quick Add
          </button>
        </div>
      </div>
    </article>
  );
}
