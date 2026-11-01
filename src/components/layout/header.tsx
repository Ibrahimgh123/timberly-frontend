"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/types/i18n";

const navigationItems = [
  ["home", "/"],
  ["products", "/products"],
  ["cart", "/cart"],
  ["wishlist", "/wishlist"],
  ["checkout", "/checkout"],
  ["trackOrder", "/track-order"],
] as const;

export function Header() {
  const t = useTranslations("navigation");
  const brand = useTranslations("brand");
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale: Locale = locale === "en" ? "ar" : "en";

  return (
    <header className="border-b">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-5">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {brand("name")}
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {navigationItems.map(([label, href]) => (
            <Link key={label} href={href} aria-current={pathname === href ? "page" : undefined} className="text-muted-foreground transition-colors hover:text-foreground">
              {t(label)}
            </Link>
          ))}
          <Link href={pathname} locale={nextLocale} className="font-medium">
            {t("language")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
