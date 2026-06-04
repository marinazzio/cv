import strings from "@/dictionaries/common.json";
import Link from "next/link";
import { useDictionary } from "@/app/providers/dictionary-provider";

export default function LinkedIn() {
    const dictionary = useDictionary();
    const linkedIn = strings["contacts"].linkedIn;
    const label = dictionary["contacts"].linkedInLabel;

    return (
        <>
        {label}: <Link href={linkedIn} className="text-yellow-300">{linkedIn}</Link>
        </>
    );
}
