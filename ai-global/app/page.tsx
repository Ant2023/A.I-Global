import Navbar from "./components/Navbar";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50">
        {/* subtle background shapes */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-200/40 blur-3xl" />
          <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                Technology Solutions
              </p>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
                Technology solutions for modern businesses.
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                AI Global Business Services delivers custom applications, cloud solutions, and applied AI to help organizations operate, adapt, and grow
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {/* Primary button — logo-blue */}
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#1E6BB8] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#165A9A] focus:outline-none focus:ring-2 focus:ring-[#1E6BB8]/40 focus:ring-offset-2"
                >
                  Contact our team
                </a>

                {/* Secondary button */}
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  View Services
                </a>
              </div>
            </div>

            {/* RIGHT HERO CARD */}
            <div className="lg:pl-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#1E6BB8]">
                  What we deliver
                </p>

                <h3 className="mt-3 text-xl font-semibold text-slate-900">
                  Technology solutions that work.
                </h3>

                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1E6BB8]" />
                    Custom applications built for scale
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1E6BB8]" />
                     Cloud solutions that enable growth
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#1E6BB8]" />
                     Applied AI for smarter operations
                  </li>
                </ul>

                <div className="mt-8 rounded-xl bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Enterprise-ready execution
                  </p>
                  <p className="mt-1 text-sm text-slate-600">
                    Clear scope, measurable outcomes, clean documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN SECTIONS */}
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
