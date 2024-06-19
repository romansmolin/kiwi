'use client'

import React, { useState } from 'react';
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

import { axiosClient } from '@/shared/api/axiosClient';

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { CalendarIcon } from "lucide-react"
import { Spinner, OtpForm } from './index'

import { cn } from '@/lib/utils';

const formSchema = z.object({
    nameOfKid: z
        .string()
        .min(2, { message: "Введите имя ребенка" })
        .max(50, { message: "Слишком много символов" }),
    ageOfKid: z
        .preprocess(value => Number(value), z
            .number()
            .min(1, { message: "Введите возраст" })),
    numberOfKids: z
        .preprocess(value => Number(value), z
            .number()
            .min(1, { message: "Минимум 1 ребенок на празднике" })
            .max(25, { message: "Максимум 25 детей на празднике" })),
    desiredCharacter: z.string(),
    phoneNumber: z
        .string()
        .regex(/^(\+?\d{1,4}[\s-]?)?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{4})$/, { message: "Нужный формат: +371..." }),
    date: z
        .date({
            required_error: "Введите дату праздника",
        }),
});

interface EventFormProps {
    className?: string
}

type FormStateType = 'initial' | 'otp-verification' | 'success' | 'loading'

const EventForm: React.FC<EventFormProps> = ({ className = '' }) => {
    const [formState, setFormState] = useState<FormStateType>('initial');
    const [loading, setLoading] = useState(false);
    const [otpCode, setOtpCode] = useState('')
    const [error, setError] = useState<string | null>(null);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nameOfKid: "",
            ageOfKid: undefined,
            numberOfKids: undefined,
            desiredCharacter: "",
            phoneNumber: "",
            date: undefined,
        },
    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setFormState('loading');
        setError(null);
        try {
            const response = await axiosClient.post('/otp_verification/send-otp', { phone: values.phoneNumber });
            if (response?.data.success) {
                setFormState('otp-verification');
            } else {
                setError('Ошибка при отправке OTP. Пожалуйста, попробуйте снова.');
                setFormState('initial');
            }
        } catch (err) {
            console.error('Error while sending OTP code: ', err);
            setError('Ошибка при отправке OTP. Пожалуйста, попробуйте снова.');
            setFormState('initial');
        } finally {
            setLoading(false);
        }
    };

    const submitOtpCode = async () => {
        setLoading(true);
        setError(null);
        try {
            const formValues = form.getValues();
            const response = await axiosClient.post('/otp_verification/verify-otp', { phone: formValues.phoneNumber, otpCode: otpCode });
            if (response?.data.success) {
                sendEmail()
                setFormState('success');
            } else {
                setError('Ошибка при верификации OTP. Пожалуйста, попробуйте снова.');
                setFormState('otp-verification');
            }
        } catch (err) {
            console.error('Error while verifying OTP code: ', err);
            setError('Ошибка при верификации OTP. Пожалуйста, попробуйте снова.');
            setFormState('otp-verification');
        } finally {
            setLoading(false);
        }
    };

    const sendEmail = async () => {
        const formValues = form.getValues();
        try {
            await axiosClient.post('/mail/send-email', {
                ...formValues
            })
        } catch (err) {
            console.error('Error while verifying OTP code: ', err);
        }
    }

    const renderForm = () => (
        <>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-primary-600 text-2xl  sm:text-3xl">Закажи праздник уже сегодня!</h2>
                <p className="mt-4 text-primary-500 text-lg">
                    Порадуйте себя и своего ребенка, наполнив жизнь запоминающемся событием
                </p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-0 mt-8">
                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:flex-row gap-4'>
                        <FormField
                            control={form.control}
                            name="nameOfKid"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>Имя ребенка</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="ageOfKid"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>Возраст ребенка</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="numberOfKids"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>Количество детей</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="desiredCharacter"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>Желаемый персонаж</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phoneNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>Номер телефона</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className='leading-7 text-primary-600'>Дата праздника</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={cn(
                                                        "pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPP")
                                                    ) : (
                                                        null
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date()
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    {error && <p className="text-red-600">{error}</p>}
                    <div>
                        <Button type="submit" className='bg-primary-600 flex-1 w-full md:w-auto' disabled={loading}>
                            {loading ? 'Загрузка...' : 'Отправить'}
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );

    const renderOtpVerification = () => (
        <div className='h-[600px] md:h-full flex justify-center items-center flex-col gap-6'>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-primary-600 text-2xl  sm:text-3xl">
                    Предварительная верификация личности необходима перед отправкой запроса
                </h2>
                <p className="mt-4 text-primary-500">
                    Используйте код, полученный по SMS
                </p>
            </div>
            <OtpForm setOtpCode={setOtpCode} />
            {error && <p className="text-red-600">{error}</p>}
            <Button className="bg-primary-600" onClick={submitOtpCode} disabled={loading}>
                {loading ? 'Загрузка...' : 'Отправить'}
            </Button>
        </div>
    );

    const renderSuccess = () => (
        <div className="h-[600px] md:h-full flex justify-center items-center flex-col gap-6">
            <h2 className="text-primary-600 text-center text-2xl  sm:text-3xl">
                Спасибо! Ваш запрос был отправлен.
            </h2>
            <p className="mt-4 text-primary-500">
                Мы свяжемся с вами в ближайшее время.
            </p>
        </div>
    );

    const renderLoading = () => (
        <div className="h-[600px] md:h-full flex justify-center items-center flex-col gap-6">
            <Spinner className='w-20 h-20'/>
        </div>
    )

    return (
        <div className={cn('lg:max-w-[45%] w-full h-full', className)}>
            {formState === 'initial' && renderForm()}
            {formState === 'loading' && renderLoading()}
            {formState === 'otp-verification' && renderOtpVerification()}
            {formState === 'success' && renderSuccess()}
        </div>
    );
}

export default EventForm;
