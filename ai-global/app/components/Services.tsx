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
            Delivery
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            DevOps & Platform Engineering
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            CI/CD pipelines, Infrastructure as Code, and environment
            standardization to improve delivery speed and reliability.
          </p>
        </div>

        {/* Service 2 */}
        <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2B6CB0]/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2B6CB0]">
            Infrastructure
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Cloud & Infrastructure Services
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            Cloud architecture, migrations, and cost optimization built
            for scalability, resilience, and long-term growth.
          </p>
        </div>

        {/* Service 3 */}
        <div className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[#2B6CB0]/40">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#2B6CB0]">
            Operations
          </p>

          <h3 className="mt-2 text-lg font-semibold text-slate-900">
            Reliability, Security & Operations
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            Monitoring, alerting, access controls, and operational
            practices to reduce downtime and strengthen posture.
          </p>
        </div>
      </div>
    </Section>
  );
}
