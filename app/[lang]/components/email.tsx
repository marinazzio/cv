import Link from "next/link";
import strings from "@/dictionaries/common.json"
import { useDictionary } from "@/app/providers/dictionary-provider";
// import CopyToClipboard from "./copy-to-clipboard";

export default function EMail() {
    const dictionary = useDictionary() as any;
    const email = strings["contacts"].email;
    const label = dictionary["contacts"].emailLabel;

    return (
        <>
        {label}: <Link href={`mailto:${email}`} className="text-yellow-300">{email}</Link>
        {/* <CopyToClipboard text={email} /> */}
        </>
    );
}
