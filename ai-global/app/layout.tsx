import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "A.I Global Business Services LLC",
    template: "%s | A.I Global Business Services LLC",
  },
  description: "Building scalable systems for modern applications.",
  openGraph: {
    title: "A.I Global Business Services LLC",
    description: "Building scalable systems for modern applications.",
    url: "https://yourdomain.com",
    siteName: "A.I Global",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
