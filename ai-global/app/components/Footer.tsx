export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
        <p className="text-sm text-gray-600">
          © {year} A.I Global Business Services LLC. All rights reserved.
        </p>

        <div className="text-sm text-gray-600 flex gap-4">
          <a className="hover:text-black" href="#contact">Contact</a>
          <a className="hover:text-black" href="/privacy">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
