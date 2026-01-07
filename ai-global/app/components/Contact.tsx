export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <p className="text-gray-600 mb-6 max-w-2xl">
        For inquiries, partnerships, or service requests, contact us below.
      </p>

      <div className="rounded-2xl border border-gray-200 p-6">
        <p className="text-sm text-gray-600 mb-1">Email</p>
        <a className="font-medium hover:underline" href="mailto:hello@yourdomain.com">
          hello@yourdomain.com
        </a>
      </div>
    </section>
  );
}
