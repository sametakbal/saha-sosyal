'use client'
import React, {ChangeEvent} from 'react'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslations} from "use-intl";
import {Button, Card, CardBody, CardHeader, Input, Select, SelectItem} from "@nextui-org/react";
import {GiPadlock} from "react-icons/gi";
import {registerSchema, RegisterSchema} from "@/lib/schemas/registerSchema";
import {SelectItemModel} from "@/lib/models/selectItemModel";

const positions: SelectItemModel[] = [
    {id: 1, label: 'goalKeeper', value: 'goalKeeper'},
    {id: 2, label: 'defence', value: 'goalKeeper'},
    {id: 3, label: 'centreBack', value: 'goalKeeper'},
    {id: 4, label: 'rightBack', value: 'goalKeeper'},
    {id: 5, label: 'leftBack', value: 'goalKeeper'},
    {id: 6, label: 'middle', value: 'goalKeeper'},
    {id: 7, label: 'forward', value: 'forward'},
    {id: 8, label: 'wing', value: 'wing'}
];

export default function RegisterForm() {
    const {register, handleSubmit, getValues, formState: {errors, isValid}} = useForm<RegisterSchema>({
        resolver: zodResolver(registerSchema),
        mode: 'onTouched'
    });
    const t = useTranslations('RegisterPage');

    const onSubmit = (data: RegisterSchema) => {
        console.log(data);
        console.log(getValues());
    }

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log(getValues());
    }


    return (
        <Card className='w-2/5 mx-auto'>
            <CardHeader className='flex flex-col items-center justify-center'>
                <div className='flex flex-col gap-2 items-center text-success'>
                    <div className='flex flex-row items-center gap-3'>
                        <GiPadlock size={30}/>
                        <h1 className='text-3xl font-semibold'>{t('register')}</h1>
                    </div>
                    <p className='text-neutral-500'>{t('welcomeMessage')}</p>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='space-y-4'>
                        <Input
                            defaultValue=''
                            label={t('name')}
                            variant='bordered'
                            {...register('name')}
                            isInvalid={!!errors.name}
                            errorMessage={errors.name?.message && t(errors.name?.message)}
                        />
                        <Input
                            defaultValue=''
                            label={t('surname')}
                            variant='bordered'
                            {...register('surname')}
                            isInvalid={!!errors.surname}
                            errorMessage={errors.surname?.message && t(errors.surname?.message)}
                        />
                        <Select
                            variant='bordered'
                            aria-label="position-select"
                            selectionMode="multiple"
                            {...register('positions')}
                            label={t('position')}
                            onChange={onSelectChange}
                        >
                            {positions.map(pos => (
                                <SelectItem key={pos.id}  value={pos.value}>
                                    {t(pos.label)}
                                </SelectItem>
                            ))}
                        </Select>
                        <Input
                            defaultValue=''
                            label='Email'
                            variant='bordered'
                            {...register('email')}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message && t(errors.email?.message)}
                        />
                        <Input
                            defaultValue=''
                            label={t('password')}
                            variant='bordered'
                            type='password'
                            {...register('password')}
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message && t(errors.password?.message)}
                        />
                        <Button fullWidth color='success' type='submit' disabled={isValid}
                                className='text-white font-bold'>
                            {t('register')}
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    )
}
