import { useTranslations } from "next-intl";
import { EmptyState } from "@/components/shared/empty-state";

export function CartPage() {
  const t = useTranslations();
  return <EmptyState title={t("pages.cart")} description={t("empty.cart")} />;
}
