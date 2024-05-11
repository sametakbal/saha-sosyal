import React from 'react'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import {GiFire} from "react-icons/gi";
import Link from "next/link";
import {Button} from "@nextui-org/button";

export default function TopNav() {
    return (
        <Navbar
            maxWidth='xl'
            className='bg-gradient-to-r from-green-300 to-green-700'
            classNames={{
                item: [
                    'text-xl',
                    'text-white',
                    'uppercase'
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
                <NavbarItem as={Link} href={'/members'}>Matches</NavbarItem>
                <NavbarItem as={Link} href={'/list'}>Lists</NavbarItem>
                <NavbarItem as={Link} href={'/messages'}>Messages</NavbarItem>
            </NavbarContent>

            <NavbarContent justify={'end'}>
                <Button variant='bordered' className='text-white'>{'login'}</Button>
                <Button variant='bordered' className='text-white'>{'register'}</Button>
            </NavbarContent>
        </Navbar>
    )
}
