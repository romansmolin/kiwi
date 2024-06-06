'use client'

import React from 'react';
import { format } from "date-fns"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from 'zod';

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

const EventForm = ({ className = '' }) => {
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

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        console.log(values);
    };

    return (
        <div className={`lg:max-w-[45%] w-full ${className}`}>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-primary-600 text-2xl font-bold sm:text-3xl">Закажи праздник уже сегодня!</h2>
                <p className="mt-4 text-primary-500">
                    Порадуйте себя и своего ребенка, наполнив жизнь запоминающемся событием
                </p>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 mb-0 mt-8">
                    <div className='flex flex-col sm:flex-row gap-4'>
                        <div className='flex flex-col flex-1 gap-4'>
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
                                        <FormLabel className='leading-7 text-primary-600'>Количество детей на празднике</FormLabel>
                                        <FormControl>
                                            <Input {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className='flex flex-col flex-1 gap-4'>
                            <FormField
                                control={form.control}
                                name="desiredCharacter"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='leading-7 text-primary-600'>Желаемый персонаж</FormLabel>
                                        <FormControl>
                                            <Input {...field}/>
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
                                            <Input {...field}/>
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
                    </div>
                    <div>
                        <Button type="submit" className='bg-primary-600 flex-1'>Отправить</Button>
                    </div>
                </form>
            </Form>
        </div>
    );
}

export default EventForm;

