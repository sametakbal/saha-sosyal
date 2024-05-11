'use client'
import React from 'react'
import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {GiFire} from "react-icons/gi";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import NavLink from "@/components/navbar/NavLink";
import {useLocale, useTranslations} from "use-intl";
import LanguageSwitcher from "@/components/navbar/LanguageSwitcher";

const pages = [
    {id: 1, label: 'members', href: '/members'},
    {id: 2, label: 'lists', href: '/lists'},
    {id: 3, label: 'messages', href: '/messages'}
];
export default function TopNav() {
    const t = useTranslations('Navbar');
    const locale = useLocale();
    return (
        <Navbar
            maxWidth='xl'
            className='bg-gradient-to-r from-green-300 to-green-700'
            classNames={{
                item: [
                    'text-xl',
                    'text-white',
                    'uppercase',
                    'data-[active=true]:text-green-900'
                ]
            }}
        >
            <NavbarBrand as={Link} href={'/'}>
                <GiFire size={40} className='text-gray-200'/>
                <div className='font-bold text-3xl flex'>
                    <span className='text-gray-900'>Saha </span>
                    <span className='text-gray-200'>Sosyal</span>
                </div>
            </NavbarBrand>
            <NavbarContent justify={'center'}>
                {pages.map(page => (
                    <NavLink key={page.id} href={`/${locale}/${page.href}`} label={t(page.label)}/>))}
            </NavbarContent>

            <NavbarContent justify={'end'}>
                <Button variant='bordered' as={Link} href={`/${locale}/login`}
                        className='text-white'>{t('login')}</Button>
                <Button variant='bordered' as={Link} href={`/${locale}/register`}
                        className='text-white'>{t('register')}</Button>
                <LanguageSwitcher/>
            </NavbarContent>
        </Navbar>
    )
}
