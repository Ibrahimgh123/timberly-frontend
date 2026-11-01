import { StoreActionLink } from "@/components/shared/store-action-link";
import {
  Font12SecondarySemibold,
} from "@/components/shared/typography";

import { CategoryCard, type CategoryItem } from "./category-card";

type ShopByCategoryProps = {
  categories: CategoryItem[];
  exploreHref: string;
};

export function ShopByCategory({
  categories,
  exploreHref,
}: ShopByCategoryProps) {
  if (categories.length === 0) return null;

  return (
    <section
      aria-labelledby="shop-by-category-title"
      className="bg-surface-warm-white px-4 py-8 lg:px-8 lg:py-10"
    >
      <div>
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 id="shop-by-category-title" className="uppercase">
            <Font12SecondarySemibold>Shop by category</Font12SecondarySemibold>
          </h2>

          <StoreActionLink href={exploreHref}>Explore All</StoreActionLink>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
