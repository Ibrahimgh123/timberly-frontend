"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";
import { ProductCard } from "@/features/products/components/product-card";
import type {
  Product,
  ProductCategory,
} from "@/features/products/types/product";

type Filter = "all" | ProductCategory;

type HomeProductsProps = {
  products: Product[];
  locale?: "en" | "ar";
  wishlistIds?: string[];
  onToggleWishlist?: (product: Product) => void;
  onQuickAdd?: (product: Product) => void;
};

const filters: { label: string; value: Filter }[] = [
  { label: "All", value: "all" },
  { label: "Living Room", value: "living-room" },
  { label: "Bedroom", value: "bedroom" },
  { label: "Dining", value: "dining" },
  { label: "Kitchen", value: "kitchen" },
  { label: "Tables", value: "tables" },
];

export function HomeProducts({
  products,
  locale = "en",
  wishlistIds = [],
  onToggleWishlist,
  onQuickAdd,
}: HomeProductsProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter(
          (product) => product.category === activeFilter,
        );

  return (
    <section
      aria-labelledby="home-products-title"
      className="bg-surface-warm-white px-4 py-8 lg:px-8"
    >
      <div className="">
        <div className="mb-6 flex flex-col gap-5 border-b border-outline-warm pb-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest text-brand-walnut">
              Authentic Joinery
            </p>

            <h2
              id="home-products-title"
              className="font-serif text-3xl leading-tight text-brand-forest"
            >
              Our Products
            </h2>
          </div>

          <div
            role="group"
            aria-label="Filter products by category"
            className="flex max-w-full gap-2 overflow-x-auto pb-1"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.value)}
                  className={cn(
                    "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-walnut",
                    isActive
                      ? "border-brand-forest bg-brand-forest text-surface-white"
                      : "border-outline-warm bg-surface-white text-brand-forest hover:border-brand-sand",
                  )}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          {filteredProducts.length} products
        </p>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                locale={locale}
                isWishlisted={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickAdd={onQuickAdd}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-outline-warm bg-surface-white px-6 py-16 text-center">
            <p className="text-sm text-ink-secondary">
              No products available in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}