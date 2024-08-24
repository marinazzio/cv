import Image from "next/image";

export default function Userpic() {
    return (
        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
            <Image
                src="/userpic.jpg"
                width={500}
                height={500}
                alt="Photo of the author"
            />
        </div>
    );
}