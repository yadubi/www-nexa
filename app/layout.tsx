import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/language-context";

export const metadata: Metadata = {
  title: "Nexa Capital - Discipline. Conviction. Long-Term Value.",
  description: "An independent investment firm focused on identifying asymmetric opportunities across global markets through disciplined research and conviction-led decision making.",
  keywords: ["investment", "capital", "long-term", "value investing", "global markets"],
  authors: [{ name: "Nexa Capital" }],
  openGraph: {
    title: "Nexa Capital - Discipline. Conviction. Long-Term Value.",
    description: "An independent investment firm focused on identifying asymmetric opportunities across global markets.",
    type: "website",
    locale: "en_US",
    alternateLocale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
