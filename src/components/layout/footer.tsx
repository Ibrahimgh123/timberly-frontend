import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="mt-auto border-t">
      <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>{t("copyright")}</span>
      </div>
    </footer>
  );
}
