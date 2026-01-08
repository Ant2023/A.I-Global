export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Header */}
        <header className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Share a brief overview of what you’re building and where you need support.
            We typically respond within 1–2 business days.
          </p>
        </header>

        {/* Form */}
        <div className="mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>
              <p className="mt-2 text-sm text-slate-600">
                We’ll route your request to the right department and follow up by email.
              </p>
            </div>

            <div className="hidden sm:block text-right">
              <p className="text-xs font-medium text-slate-500">Email</p>
              <a
                href="mailto:hello@yourcompany.com"
                className="text-sm font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                info@aiglobal.com
              </a>
            </div>
          </div>

          <form
            className="mt-6 space-y-5"
            method="post"
            action="#"
            aria-label="Contact form"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-slate-700"
              >
                Name <span className="text-slate-400">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-slate-700"
              >
                Email <span className="text-slate-400">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                required
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Company (optional) */}
            <div>
              <label
                htmlFor="contact-company"
                className="block text-sm font-medium text-slate-700"
              >
                Company
              </label>
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-slate-700"
              >
                Message <span className="text-slate-400">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full resize-y rounded-md border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
              <p className="mt-2 text-xs text-slate-500">
                Include timeline, scope, and any relevant links if available.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2"
              >
                Send message
              </button>
            </div>

            <p className="text-xs text-slate-500">
              By contacting us, you agree to our{" "}
              <a href="/privacy" className="underline underline-offset-4 hover:text-slate-700">
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
