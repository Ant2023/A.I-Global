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
          {eyebrow && (
  <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
    {eyebrow}
  </p>
)}


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
