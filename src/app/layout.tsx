import type { Metadata, Viewport } from "next";
import { Figtree, Noto_Sans } from "next/font/google";
import "./globals.css";
import { ClientProviders } from "@/components/ClientProviders";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Областная детская больница — ОДБ Туркестан",
  description:
    "Областная детская больница Туркестанской области — многопрофильное медицинское учреждение для детей",
  icons: {
    icon: "/images/favicon-32x32.png",
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
    <html
      lang="ru"
      className={`${figtree.variable} ${notoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <a href="#main-content" className="skip-link">
          Перейти к основному содержимому
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
