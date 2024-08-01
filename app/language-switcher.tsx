import ButtonWithRedirectToLocale from "@/app/button-with-redirect-to-locale";
import Link from "next/link";

export default function LanguageSwitcher() {
    return (
        <div className="flex object-center">
            <div className="flex">
                <Link className="mx-2 bg-blue-200 rounded" href={"en"}>English</Link> |
                <Link className="mx-2 bg-blue-200 rounded" href={"ru"}>Русский</Link>
            </div>
        </div>
    );
}
