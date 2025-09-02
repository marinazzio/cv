import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

import CvHeader from "./components/cv-header";
import CvBody from "./components/cv-body";
import { DictionaryProvider } from "../providers/dictionary-provider";

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function IndexPage({
  params,
}: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <main className="container mx-auto px-4">
        <CvHeader />
        {/* <LanguageSwitcher hideBlock={true} /> */}
        <CvBody />
      </main>
    </DictionaryProvider>
  );
}
