import { useTranslations } from "next-intl";
import { EmptyState } from "@/components/shared/empty-state";

export function CheckoutPage() {
  const t = useTranslations();
  return <EmptyState title={t("pages.checkout")} description={t("empty.cart")} />;
}
