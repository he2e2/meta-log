import type { Metadata, Viewport } from "next";
import "./globals.scss";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "meta-log",
  description: "seo-friendly-blog",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/icons/192.png", sizes: "192x192" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
