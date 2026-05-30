import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PhotoBoost – Auto-optimize photos for Google Business reviews",
  description: "Automatically crop, compress, and enhance customer photos for Google Business listings to maximize review impact."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="502d8866-1b0a-4b02-ad8c-8def2767a115"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] font-sans antialiased">{children}</body>
    </html>
  );
}
