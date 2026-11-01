import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  Font12SecondaryRegular,
  Font13ForestSemibold,
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
      className="group flex min-w-0 items-center gap-3 rounded-xl border border-outline-warm bg-surface-white p-2.5 text-start transition-colors hover:border-brand-sand hover:bg-surface-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-walnut sm:gap-4 sm:p-3"
    >
      <div className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-surface-stone sm:size-[72px]">
        <Image
          src={category.image}
          alt=""
          width={78}
          height={78}
          sizes="72px"
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transform-none"
        />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <Font13ForestSemibold className="truncate">
          {category.title}
        </Font13ForestSemibold>

        {category.subtitle && (
          <Font12SecondaryRegular>
            {category.subtitle}
          </Font12SecondaryRegular>
        )}
      </div>

      <ChevronRight
        aria-hidden="true"
        className="size-4 shrink-0 text-brand-sand transition-transform group-hover:translate-x-0.5 group-hover:text-brand-forest"
      />
    </Link>
  );
}
