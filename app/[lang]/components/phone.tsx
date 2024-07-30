import { useDictionary } from "@/app/providers/dictionary-provider";
import Link from "next/link";

export default function Phone() {
    const dictionary = useDictionary() as any;

    const phone = dictionary["contacts"].phone;
    const phoneLabel = dictionary["contacts"].phoneLabel;

    return (
        <>
        {phoneLabel}: <Link href={`tel:${phone}`} className="text-yellow-300">{phone}</Link>
        </>
    );
}
