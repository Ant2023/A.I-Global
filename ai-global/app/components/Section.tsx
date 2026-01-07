type Props = {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "white" | "tint";
  children: React.ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  tone = "white",
  children,
}: Props) {
  const bg =
    tone === "tint"
      ? "bg-gradient-to-b from-slate-50 to-white"
      : "bg-white";

  return (
    <section id={id} className={`border-t border-slate-200 ${bg}`}>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <header className="max-w-3xl">
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              {eyebrow}
            </p>
          ) : null}

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>

          {subtitle ? (
            <p className="mt-3 text-lg leading-relaxed text-slate-600">
              {subtitle}
            </p>
          ) : null}
        </header>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
