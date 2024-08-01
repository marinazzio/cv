const redirectTo = (locale: string) => {
    
}

export default function ButtonWithRedirectToLocale({ locale }: { locale: string }) {
    return (
        <button className="mx-2 bg-blue-200 rounded" onClick={() => redirectTo('en')}>EN</button>
    );
}
