import React from 'react'
import { benefits } from '@/shared/consts'

const Benefits = () => {
    return (
        <section className="bg-primary-100 rounded-2xl flex flex-col items-center px-4 py-8 sm:px-6 sm:py-6 ">
            <div className="mx-auto px-4 lg:py-12 sm:px-6 md:py-16 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-primary-600 sm:text-4xl">МЫ СДЕЛАЕМ ВАШ ПРАЗДНИК НЕЗАБЫВАЕМЫМ</h2>

                    <p className="mt-4 text-primary-600 sm:text-xl">
                        Наша профессиональная команда аниматоров сделает праздник вашего ребенка незабываемым!
                    </p>
                </div>

                <div className="mt-8 sm:mt-12">
                    <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:divide-x sm:divide-gray-100">
                        {benefits.map(benefit => (
                            <div key={benefit.title} className="flex flex-col px-4 py-8 text-center bg-white rounded-2xl">
                                <dt className="order-last text-lg font-extrabold text-primary-600">{benefit.title}</dt>

                                <dd className="text-4xl font-extrabold text-primary-600 md:text-5xl">{benefit.value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <span id='price' className='invisible'></span>
        </section>
    )
}

export default Benefits