import type {Metadata} from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import React from "react";
import TopNav from "@/components/navbar/TopNav";
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

export const metadata: Metadata = {
    title: "Saha Sosyal",
    description: "",
};

export default async function RootLayout({
                                             children,
                                             params: {locale}
                                         }: Readonly<{
    children: React.ReactNode;
    params: { locale: string };
}>) {
    const messages = await getMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={'tr'} messages={messages}>
            <Providers>
                <TopNav/>
                <main className='container mx-auto'>
                    {children}
                </main>
            </Providers>
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
