import EmailAt from '@/assets/icons/EmailAt';
import Eye from '@/assets/icons/Eye';
import React from 'react'

const EventForm = ({ className = '' }) => {
    return (
        <div className={`sm:absolute  w-full sm:max-w-[470px] sm:right-[50%] sm:translate-x-[50%] mx-auto px-4 py-16 sm:px-6 lg:px-8 border rounded-2xl border-primary-200 ${className}`}>
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-primary-600 text-2xl font-bold sm:text-3xl">Закажи праздник уже сегодня!</h1>

                <p className="mt-4 text-primary-500">
                    Порадуйте себя и своего ребенка, наполнив жизнь запоминающемся событием
                </p>
            </div>

            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <div className="relative">
                        <input
                            type="email"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Введите почту"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <EmailAt />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <Eye />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <Eye />
                        </span>
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <input
                            type="password"
                            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                            placeholder="Enter password"
                        />
                        <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                            <Eye />
                        </span>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <p className="text-sm text-white">
                        <a className="underline" href="#">Подтвердить почту</a>
                    </p>
                    <button
                        type="submit"
                        className="inline-block rounded-lg bg-primary-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Отправить заявку
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EventForm
