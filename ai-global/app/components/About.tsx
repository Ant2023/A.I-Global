import Section from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="About A.I Global"
      subtitle="Delivering practical, scalable technology solutions for modern businesses."
      tone="white"
    >
      {/* Two-column content */}
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left: focus */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
          <h3 className="text-lg font-semibold text-slate-900">
            What we help with
          </h3>

          <p className="mt-3 leading-relaxed text-slate-600">
            We partner with organizations to design, build, and improve technology
            that supports day-to-day operations and long-term growth without
            unnecessary complexity.
          </p>

          <div className="mt-6 grid gap-4">
            <FeatureItem
              title="Custom application development"
              text="Web apps, internal tools, and lightweight platforms built around your workflow."
            />
            <FeatureItem
              title="Cloud integration"
              text="Modernize systems and connect services so teams can scale with confidence."
            />
            <FeatureItem
              title="Data & business insights"
              text="Reporting and analytics that turn data into clarity for better decisions."
            />
          </div>
        </div>

        {/* Right: engagement model */}
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-slate-900">
              How engagements work
            </h3>

            {/* subtle accent */}
            <span className="h-1 w-12 rounded-full bg-[#2B6CB0]" />
          </div>

          <div className="mt-5 grid gap-4">
            <StepItem
              n="01"
              title="Discover"
              text="We align on goals, users, and the outcome you want to achieve."
            />
            <StepItem
              n="02"
              title="Design & build"
              text="We create a practical solution and deliver in clear milestones."
            />
            <StepItem
              n="03"
              title="Launch & support"
              text="We help you roll out smoothly and provide documentation and follow-through."
            />
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <Stat label="Focus" value="Tech solutions" />
            <Stat label="Mode" value="Collaborative" />
            <Stat label="Outcome" value="Business-ready" />
          </div>

          <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-sm font-semibold text-slate-900">
              Clear communication. Practical delivery.
            </p>
            <p className="mt-1 text-sm text-slate-600">
              Defined scope, simple handoff, and solutions designed to be easy to
              maintain and evolve.
            </p>
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/75">Ready to connect?</p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight">
              Let’s talk about your goals and how we can help.
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
          >
            Contact our team
          </a>
        </div>
      </div>
    </Section>
  );
}

function FeatureItem({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white">
        <span className="h-2.5 w-2.5 rounded-full bg-[#2B6CB0]" />
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function StepItem({
  n,
  title,
  text,
}: {
  n: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="text-xs font-bold text-[#2B6CB0]">{n}</div>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="text-sm leading-relaxed text-slate-600">{text}</p>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}
