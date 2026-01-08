"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;

  const headerOffset = 88; // adjust if your navbar height differs
  const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({ top: y, behavior: "smooth" });
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (hashHref) => (e) => {
    e.preventDefault();
    const id = hashHref.replace("#", "");
    setOpen(false);

    // if you're not on the home page, route first (optional)
    // for now: assume single-page sections exist on the current page
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        {/* Brand */}
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/logo-icon.png"
            alt="A.I Global"
            width={40}
            height={40}
            priority
            className="h-10 w-10 shrink-0"
          />
          <span className="min-w-0 leading-tight">
            <span className="block text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
              A.I Global
            </span>
            <span className="block text-xs text-slate-600 sm:text-sm">
              Business Services
            </span>
          </span>
        </Link>

        {/* Desktop nav (same page sections) */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.slice(0, 2).map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={handleNav(l.href)}
              className="text-sm text-slate-700 transition hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={handleNav("#contact")}
            className="rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Contact
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
        >
          {!open ? (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M6 6l12 12M18 6l-12 12" />
            </svg>
          )}
        </button>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200/70 to-transparent" />

      {/* Mobile overlay + panel */}
      {open && (
        <div className="md:hidden">
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/20"
          />

          <div
            id="mobile-menu"
            className="fixed right-3 top-[72px] z-50 w-[calc(100%-1.5rem)] max-w-sm rounded-2xl border border-slate-200 bg-white p-3 shadow-lg"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleNav(l.href)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-slate-800 transition hover:bg-slate-50"
                >
                  {l.label}
                </a>
              ))}

              <div className="mt-2 border-t border-slate-200 pt-3">
                <a
                  href="#contact"
                  onClick={handleNav("#contact")}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Contact
                </a>
                <p className="mt-2 text-center text-xs text-slate-500">
                  Typical response time: 1–2 business days
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
