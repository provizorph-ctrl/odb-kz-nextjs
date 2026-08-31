import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "Областная детская больница — ОДБ Туркестан",
  description:
    "Областная детская больница Туркестанской области — многопрофильное медицинское учреждение для детей",
  icons: {
    icon: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=Noto+Sans:wght@100..900&display=swap" rel="stylesheet" />
      </head>
      <body
        className="min-h-full flex flex-col overflow-x-hidden"
        style={{ fontFamily: "'Figtree', 'Noto Sans', system-ui, sans-serif" }}
      >
        <a href="#main-content" className="skip-link">
          Перейти к основному содержимому
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
