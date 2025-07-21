import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import { ScrollProgress } from "@/components/ScrollIndicator";

const inter = Gothic_A1({ weight: "400",subsets:['latin-ext'] });

export const metadata: Metadata = {
  title: "Gürleş - Говорите свободно",
  description: "Скажите «привет» новому опыту общения. Бескомпромиссный...",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  console.log("locale", locale);

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
