import Link from "next/link";
import type { ReactNode } from "react";
import { useLocale, useTranslations } from "next-intl";

const categories = [
  { key: "livingRoom", slug: "living-room" },
  { key: "bedroom", slug: "bedroom" },
  { key: "diningRoom", slug: "dining-room" },
  { key: "tablesDesks", slug: "tables-desks" },
  { key: "storage", slug: "cabinets-storage" },
] as const;

export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const productsHref = `/${locale}/products`;

  return (
    <footer className="mt-auto border-t border-outline-warm bg-palette-ece7df">
      <div className="page-gutter py-9 sm:py-10">
        <div className="grid gap-9 sm:grid-cols-2 lg:grid-cols-[1.8fr_0.85fr_0.95fr_0.85fr] lg:gap-10">
          <div>
            <Link
              href={`/${locale}`}
              className="font-heading text-xl tracking-wide text-brand-forest"
            >
              {t("brand")}
            </Link>
            <p className="mt-3 text-sm leading-6 text-ink-secondary">
              {t("description")}
            </p>
            <p className="mt-4 flex items-center gap-2 text-sm text-ink-secondary">
              <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-brand-sand" />
              {t("delivery")}
            </p>
          </div>

          <FooterColumn title={t("quickLinks.title")}>
            <FooterLink href={`/${locale}`}>{t("quickLinks.home")}</FooterLink>
            <FooterLink href={productsHref}>{t("quickLinks.shop")}</FooterLink>
            <FooterLink href={`/${locale}/wishlist`}>{t("quickLinks.wishlist")}</FooterLink>
            <FooterLink href={`/${locale}/track-order`}>{t("quickLinks.trackOrder")}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t("categories.title")}>
            {categories.map(({ key, slug }) => (
              <FooterLink key={key} href={`${productsHref}?category=${slug}`}>
                {t(`categories.${key}`)}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title={t("care.title")}>
            <FooterLink href={`/${locale}/track-order`}>{t("care.delivery")}</FooterLink>
            <FooterLink href={`/${locale}/products`}>{t("care.warranty")}</FooterLink>
            <FooterLink href={`/${locale}/cart`}>{t("care.cart")}</FooterLink>
            <FooterLink href={`/${locale}/checkout`}>{t("care.checkout")}</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-outline-warm pt-5 text-xs text-ink-secondary sm:flex-row sm:items-center sm:justify-between">
          <span>{t("copyright")}</span>
          <span>{t("closing")}</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-brand-forest">
        {title}
      </h2>
      <ul className="space-y-2 text-sm text-ink-secondary">{children}</ul>
    </nav>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <li>
      <Link href={href} className="transition-colors hover:text-brand-walnut">
        {children}
      </Link>
    </li>
  );
}
