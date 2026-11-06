import Link from "next/link";
import { Font14ForestMedium } from "@/components/shared/typography";

type CategoryNavProps = {
  locale?: "en" | "ar";
  activeCategory?: string;
};

const categories = [
  { label: "All Furniture", slug: "" },
  { label: "Living Room", slug: "living-room" },
  { label: "Bedroom", slug: "bedroom" },
  { label: "Dining Room", slug: "dining-room" },
  { label: "Kitchen", slug: "kitchen" },
  { label: "Tables & Desks", slug: "tables-desks" },
  { label: "Cabinets & Storage", slug: "cabinets-storage" },
  { label: "Office", slug: "office" },
];

export function CategoryNav({
  locale = "en",
  activeCategory,
}: CategoryNavProps) {
  return (
    <nav
      aria-label="Furniture categories"
      className="border-b border-outline-warm bg-surface-white"
    >
      <div className="page-gutter overflow-x-auto">
        <ul className="flex min-w-max items-center justify-between gap-8">
          {categories.map(({ label, slug }) => {
            const isActive = activeCategory === slug;

            const href = slug
              ? `/${locale}/products?category=${slug}`
              : `/${locale}/products`;

            return (
              <li key={label}>
                <Link
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className="group relative block whitespace-nowrap py-3"
                >
                  <Font14ForestMedium
                    className={`transition-colors group-hover:text-brand-walnut ${
                      isActive ? "text-brand-walnut" : "text-ink-deep-ink"
                    }`}
                  >
                    {label}
                  </Font14ForestMedium>

                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-2 h-px origin-left bg-brand-sand transition-transform duration-200 group-hover:scale-x-100 group-focus-visible:scale-x-100 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
