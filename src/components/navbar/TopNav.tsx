import React from 'react'
import {Navbar, NavbarBrand, NavbarContent} from "@nextui-org/react";
import {GiFire} from "react-icons/gi";
import Link from "next/link";
import {Button} from "@nextui-org/button";
import NavLink from "@/components/navbar/NavLink";

const pages = [
    {id: 1, label: 'Members', href: '/members'},
    {id: 2, label: 'Lists', href: '/lists'},
    {id: 3, label: 'Messages', href: '/messages'}
];
export default function TopNav() {
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
                {pages.map(page => (<NavLink key={page.id} href={page.href} label={page.label}/>))}
            </NavbarContent>

            <NavbarContent justify={'end'}>
                <Button variant='bordered' as={Link} href='/login' className='text-white'>{'login'}</Button>
                <Button variant='bordered' as={Link} href='/register' className='text-white'>{'register'}</Button>
            </NavbarContent>
        </Navbar>
    )
}
