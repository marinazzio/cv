import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

import CvHeader from "./components/cv-header";
import CvSidebar from "./components/cv-sidebar";
import CvBody from "./components/cv-body";
import { DictionaryProvider } from "../providers/dictionary-provider";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <DictionaryProvider dictionary={dictionary}>
      <div className="bg-gray-100 p-4">
        <div className="border-1 shadow-lg shadow-gray-700 rounded-lg">
          <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
            <CvHeader />
          </div>
          <CvSidebar />
          <CvBody />
        </div>
      </div>
    </DictionaryProvider>
  );
}
