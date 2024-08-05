import { useDictionary } from "@/app/providers/dictionary-provider";

export default function ProfileSummary() {
    const dictionary = useDictionary() as any;

    return (
        <section className="mb-6">
            <h2 className="text-2xl font-semibold border-b-2 border-gray-200 pb-2 mb-4">{dictionary.profile.title}</h2>
            <p className="bg-gray-200 p-4 rounded">{dictionary.profile.content}</p>
        </section>
    )
}
