export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-slate-200 bg-slate-50"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Contact
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Share a brief overview of what you’re building and where you need support.
            We typically respond within 1- 2 business days.
          </p>
        </div>

        {/* Form */}
        <div className="mt-12 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <h3 className="text-lg font-semibold text-slate-900">
            Send a message
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            This form is a front-end placeholder. It can be connected to Formspree,
            Netlify Forms, or another provider when deployed.
          </p>

          <form className="mt-6 space-y-5">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="What are you building, and what do you need help with?"
                className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Send message
              </button>
            </div>
          </form>

          <p className="mt-4 text-xs text-slate-500">
            By contacting us, you agree to our{" "}
            <a href="#" className="underline hover:text-slate-700">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
}
