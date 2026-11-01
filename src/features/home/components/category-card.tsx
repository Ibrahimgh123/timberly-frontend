import Image from "next/image";
import Link from "next/link";
import {
  Font10SecondaryRegular,
  Font12ForestSemibold,
} from "@/components/shared/typography";

export type CategoryItem = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  href: string;
};

type CategoryCardProps = {
  category: CategoryItem;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={category.href}
      className="group flex min-w-0 flex-col items-center rounded-xl border border-outline-warm bg-surface-white px-3 py-3 text-center transition-colors hover:border-brand-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-walnut"
    >
      <div className="relative mb-3 size-16 overflow-hidden rounded-full border border-outline-warm lg:size-20">
        <Image
          src={category.image}
          alt=""
          fill
          sizes="80px"
          className="object-cover transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
        />
      </div>

      <Font12ForestSemibold>
        {category.title}
      </Font12ForestSemibold>

      {category.subtitle && (
        <Font10SecondaryRegular>
          {category.subtitle}
        </Font10SecondaryRegular>
      )}
    </Link>
  );
}
