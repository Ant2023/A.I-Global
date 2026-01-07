const services = [
  {
    title: "IT Consulting & Support",
    desc: "Technology guidance and operational support to help organizations run efficiently.",
  },
  {
    title: "Cloud & Infrastructure Services",
    desc: "Support for hosting, cloud environments, and infrastructure modernization.",
  },
  {
    title: "Systems Administration",
    desc: "User access, system configuration, maintenance, and operational support.",
  },
  {
    title: "Security & Access Management",
    desc: "Account access controls, security best practices, and operational safeguards.",
  },
];

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-2">Services</h2>
      <p className="text-gray-600 mb-8 max-w-2xl">
        Practical IT services designed to support day-to-day operations and long-term growth.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {services.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-gray-200 p-6 hover:border-gray-300 transition"
          >
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
