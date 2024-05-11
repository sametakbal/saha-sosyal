import React, {ChangeEvent, useEffect, useState, useTransition} from 'react'
import {Select, SelectItem} from "@nextui-org/react";
import {useRouter} from "next/navigation";

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const [locale, setLocale] = useState('');

    useEffect(() => {
        if ('' === locale) {
            setLocale(window.location.pathname.substring(1, 3));
        }
    }, [locale]);
    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        startTransition(() => {
            router.replace('/' + e.target.value);
        });
        setLocale(e.target.value);
    }

    return (
        <Select
            id="language"
            aria-label="language-select"
            label={""}
            disabled={isPending}
            selectedKeys={[locale]}
            className="w-1/4"
            onChange={onSelectChange}
        >
            <SelectItem key='tr' value='tr'>
                Türkçe
            </SelectItem>
            <SelectItem key='en' value='tr'>
                English
            </SelectItem>
        </Select>
    )
}
