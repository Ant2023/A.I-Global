export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-semibold text-lg">
          A.I Global
        </span>

        <a
          href="#contact"
          className="text-sm font-medium text-gray-700 hover:text-black"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
