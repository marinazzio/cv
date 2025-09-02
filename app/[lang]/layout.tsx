import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import "@/global.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

interface Props {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}

export default async function Root({
  children,
  params,
}: Props) {
  const { lang } = await params;

  return (
    <html lang={lang}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return {
    title: dictionary["meta"].title,
    description: dictionary["meta"].description,
  };
}
