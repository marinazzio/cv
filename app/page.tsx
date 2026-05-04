"use client";

import Header from '@/app/components/header';
import { DictionaryProvider } from '@/app/providers/dictionary-provider';
import { useLocale } from '@/app/locale-context';
import Sidebar from '@/app/components/sidebar';
import Main from '@/app/components/main';
import Spinner from '@/app/components/spinner';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const { locale } = useLocale();
    const [dictionary, setDictionary] = useState(null);

    useEffect(() => {
        const fetchDictionary = async () => {
            try {
                const response = await fetch(`/api/dictionary?locale=${locale}`);

                if (!response.ok) {
                    throw new Error("Failed to fetch dictionary");
                }

                const data = await response.json();
                setDictionary(data);
            } catch (error) {
                console.error("Error fetching dictionary: ", error);
            }
        }

        fetchDictionary();
    }, [locale]);

    if (!dictionary) {
        return (
            <Spinner />
        );
    }

    return (
        <div className="container mx-auto mt-10 w-3/4">
            <DictionaryProvider dictionary={dictionary}>
                <Header />

                <div className="flex mt-4">
                    <Sidebar />
                    <Main />
                </div>
            </DictionaryProvider>
        </div>
    );
}
