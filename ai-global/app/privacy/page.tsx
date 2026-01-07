import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for A.I Global Business Services LLC.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:py-20">
      <section className="space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-600">Last updated: January 7, 2026</p>
        </header>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            A.I Global Business Services LLC (“A.I Global,” “we,” “us”) respects your
            privacy. This policy explains what information we collect and how we use it.
          </p>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Information we collect</h2>
            <ul className="space-y-2">
              <li>• Contact information you submit (such as name, email, and message).</li>
              <li>• Basic usage data (such as page visits) if analytics are enabled.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">How we use information</h2>
            <ul className="space-y-2">
              <li>• To respond to inquiries and communicate with you.</li>
              <li>• To improve our website and services.</li>
              <li>• To maintain site security and prevent abuse.</li>
            </ul>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Data sharing</h2>
            <p>
              We do not sell your personal information. We may share information with service
              providers that help us operate the website (for example, hosting or analytics),
              only as needed to provide those services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Data retention</h2>
            <p>
              We retain messages and contact details only as long as needed to respond and
              maintain records related to our services.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-slate-900">Contact</h2>
            <p>
              If you have questions about this policy, contact us at{" "}
              <a className="underline hover:text-slate-900" href="mailto:contact@yourdomain.com">
                contact@yourdomain.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
