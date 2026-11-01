import { useTranslations } from "next-intl";
import { EmptyState } from "@/components/shared/empty-state";

export function TrackOrderPage() {
  const t = useTranslations();
  return <EmptyState title={t("pages.trackOrder")} description={t("empty.orders")} />;
}
