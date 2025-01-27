import { getDictionary } from "@/get-dictionary";
import { i18n, type Locale } from "../../i18n-config";
import "@/global.css";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {

  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata({ params }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary["meta"].title,
    description: dictionary["meta"].description,
  };
}
