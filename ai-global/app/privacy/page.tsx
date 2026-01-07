export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 leading-relaxed">
          A.I Global Business Services LLC may collect basic contact information that you
          submit through email or other communication methods. We use this information solely
          to respond to inquiries and provide requested services. We do not sell personal
          information to third parties.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          If you have questions about this policy, contact us at{" "}
          <a className="font-medium hover:underline" href="mailto:hello@yourdomain.com">
            hello@yourdomain.com
          </a>
          .
        </p>
      </section>
    </main>
  );
}
