import EmailAt from '@/assets/icons/EmailAt';
import Eye from '@/assets/icons/Eye';
import React from 'react'

const EventForm = ({ className = '' }) => {
    return (
        <div className={`lg:max-w-[470px] w-full ${className}`}>
            <div className="mx-auto max-w-lg text-center">
                <h2 className="text-primary-600 text-2xl font-bold sm:text-3xl">Закажи праздник уже сегодня!</h2>

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
                    <p className="text-sm text-primary-600">
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
