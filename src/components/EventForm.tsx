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
import { useI18n } from '../../locales/client';


interface EventFormProps {
    className?: string
    isMini?: boolean
}

type FormStateType = 'initial' | 'otp-verification' | 'success' | 'loading'

const EventForm: React.FC<EventFormProps> = ({ className = '', isMini = false }) => {
    const [formState, setFormState] = useState<FormStateType>('initial');
    const [loading, setLoading] = useState(false);
    const [otpCode, setOtpCode] = useState('')
    const [error, setError] = useState<string | null>(null);
    const t = useI18n()

    const formSchema = z.object({
        nameOfKid: z
            .string()
            .min(2, { message: t("contacts.form.name.errors.min") })
            .max(50, { message: t("contacts.form.name.errors.max") }),
        ageOfKid: z
            .preprocess(value => Number(value), z
                .number({ message: t("contacts.form.age.errors.min") })),
        numberOfKids: z
            .preprocess(value => Number(value), z
                .number({ message: t("contacts.form.number.errors.min") })
                .max(25, { message: t("contacts.form.number.errors.max") })),
        desiredCharacter: z.string(),
        phoneNumber: z
            .string()
            .regex(/^(\+?\d{1,4}[\s-]?)?\(?(\d{3})\)?[\s-]?(\d{3})[\s-]?(\d{4})$/, { message: t("contacts.form.phone.errors.message") }),
        date: z
            .date({
                required_error: t("contacts.form.date.errors.message"),
            }),
    });

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
                setError(t("contacts.form.otp.send-error"));
                setFormState('initial');
            }
        } catch (err) {
            console.error('Error while sending OTP code: ', err);
            setError(t("contacts.form.otp.send-error"));
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
                setError(t("contacts.form.otp.verification-error"));
                setFormState('otp-verification');
            }
        } catch (err) {
            console.error('Error while verifying OTP code: ', err);
            setError(t("contacts.form.otp.verification-error"));
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
                <h2 className="text-primary-600 text-2xl  sm:text-3xl">{t("contacts.form.title")}</h2>
                {!isMini && (
                    <p className="mt-4 text-primary-500 text-lg">
                        {t("contacts.form.text")}
                    </p>
                )}
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-0 mt-8">
                    <div className='grid grid-cols-1 sm:grid-cols-2 sm:flex-row gap-4'>
                        <FormField
                            control={form.control}
                            name="nameOfKid"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.name.label")}</FormLabel>
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
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.age.label")}</FormLabel>
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
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.number.label")}</FormLabel>
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
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.character.label")}</FormLabel>
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
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.phone.label")}</FormLabel>
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
                                    <FormLabel className='leading-7 text-primary-600'>{t("contacts.form.date.label")}</FormLabel>
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
                            {loading ? t("contacts.form.loading") : t("contacts.form.send")}
                        </Button>
                    </div>
                </form>
            </Form>
        </>
    );

    const renderOtpVerification = () => (
        <div className='h-[550px] flex justify-center items-center flex-col gap-6'>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-primary-600 text-2xl  sm:text-3xl">
                    {t("contacts.form.person-verification")}
                </h2>
                <p className="mt-4 text-primary-500">
                    {t("contacts.form.sms-code")}
                </p>
            </div>
            <OtpForm setOtpCode={setOtpCode} />
            {error && <p className="text-red-600">{error}</p>}
            <Button className="bg-primary-600" onClick={submitOtpCode} disabled={loading}>
                {loading ? t("contacts.form.loading") : t("contacts.form.send")}
            </Button>
        </div>
    );

    const renderSuccess = () => (
        <div className="h-[550px] flex justify-center items-center flex-col gap-6">
            <h2 className="text-primary-600 text-center text-2xl  sm:text-3xl">
                {t("contacts.form.success-title")}
            </h2>
            <p className="mt-4 text-primary-500">
                {t("contacts.form.success-text")}
            </p>
        </div>
    );

    const renderLoading = () => (
        <div className="h-[550px] flex justify-center items-center flex-col gap-6">
            <Spinner className='w-20 h-20' />
        </div>
    )

    return (
        <div className={cn('lg:max-w-[45%] w-full', className)}>
            {formState === 'initial' && renderForm()}
            {formState === 'loading' && renderLoading()}
            {formState === 'otp-verification' && renderOtpVerification()}
            {formState === 'success' && renderSuccess()}
        </div>
    );
}

export default EventForm;
