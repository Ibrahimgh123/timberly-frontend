import { useTranslations } from "next-intl";
import { EmptyState } from "@/components/shared/empty-state";

export function WishlistPage() {
  const t = useTranslations();
  return <EmptyState title={t("pages.wishlist")} description={t("empty.wishlist")} />;
}
