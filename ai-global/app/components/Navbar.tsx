import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt="A.I Global"
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0"
          />
          <span className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
            A.I Global
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/services"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <Link
          href="/contact"
          className="md:hidden rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-900 hover:bg-slate-50 transition"
        >
          Contact
        </Link>
      </div>

      {/* soft professional divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />
    </header>
  );
}
