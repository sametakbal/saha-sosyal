'use client'
import React from 'react'
import {GiPadlock} from "react-icons/gi";
import {Button, Card, CardBody, CardHeader, Input} from "@nextui-org/react";
import Link from "next/link";
import {useTranslations} from "use-intl";
import {useForm} from "react-hook-form";
import {loginSchema, LoginSchema} from "@/lib/loginSchema";
import {zodResolver} from "@hookform/resolvers/zod";

export default function LoginForm() {
    const {register, handleSubmit, formState: {errors, isValid}} = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        mode: 'onTouched'
    });
    const t = useTranslations('LoginPage');

    const onSubmit = (data: LoginSchema) => {
        console.log(data);
    }

    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-success'>
                    <div className='flex flex-row items-center gap-3'>
                        <GiPadlock size={30}/>
                        <h1 className='text-3xl font-semibold'>{t('login')}</h1>
                    </div>
                    <p className='text-neutral-500'>{t('welcomeMessage')}</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Input
                            defaultValue=''
                            label='Email'
                            variant='bordered'
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={t(errors.email?.message as string)}
                        />
                        <Input
                            defaultValue=''
                            label={t('password')}
                            variant='bordered'
                            type='password'
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={t(errors.password?.message as string)}
                        />
                        <Button fullWidth color='success' type='submit' disabled={isValid}
                                className='text-white font-bold'>
                            {t('login')}
                        </Button>
                        {/*<SocialLogin />*/}
                        <div className='flex justify-center hover:underline text-sm'>
                            <Link href='/forgot-password'>{t('forgotPassword')}</Link>
                        </div>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}
