import Section from "./Section";

export default function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="Services"
      subtitle="Practical engineering support focused on delivery, reliability, and modern infrastructure."
      tone="tint"
    >
      <div className="grid gap-6 md:grid-cols-3">
        {/* Service 1 */}
        <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2B6CB0]/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2B6CB0]">
            APPLICATIONS
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Custom Application Development
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            We design and build custom web applications and internal tools tailored to your business workflows, users, and long-term goals.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2B6CB0]/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2B6CB0]">
            CLOUD
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Cloud & Infrastructure Services
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            We help businesses adopt and modernize cloud-based systems to improve flexibility, scalability, and long-term efficiency.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2B6CB0]/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2B6CB0]">
            AI SOLUTIONS
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            AI-Powered Business Solutions
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            We implement practical AI solutions that enhance decision-making, automate routine tasks, and support smarter business processes.
          </p>
        </div>
      </div>
    </Section>
  );
}
