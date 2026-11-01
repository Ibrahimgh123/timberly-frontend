import { useTranslations } from "next-intl";

export function HomePage() {
  const t = useTranslations("home");
  return (
    <section className="mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-center gap-4 px-6 py-20">
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">{t("title")}</h1>
      <p className="max-w-xl text-lg text-muted-foreground">{t("description")}</p>
    </section>
  );
}
