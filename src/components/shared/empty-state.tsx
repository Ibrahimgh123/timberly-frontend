type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-3 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
      <p className="max-w-xl text-muted-foreground">{description}</p>
    </section>
  );
}
