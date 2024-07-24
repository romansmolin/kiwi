import React from 'react'
import { priceItems } from '@/shared/consts'
import Check from '@/components/icons/Check'
import { getI18n } from '../../../../locales/server'

const Prices = async () => {
    const t = await getI18n()

    return (
        <>
            <div className="flex flex-col gap-6 sm:items-center pt-12 sm:px-6 sm:pt-12">
                <h2 className='text-5xl  text-primary-600 m-auto'>{t("prices.title")}</h2>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:py-12 lg:px-8 lg:pt-24 lg:pb-18">
                    {priceItems.map(price => (
                        <div key={`price-${price.price.amount}`} className={`divide-y relative flex-none divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white ${price.priority && 'lg:relative lg:bottom-14'}`}>
                            <div className="p-6 sm:px-8">
                                <h2 className="text-3xl text-center font-medium text-primary-600">
                                    {/* @ts-ignore */}
                                    {t(price.title)}
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4 text-center">
                                    <strong className="text-3xl  text-primary-600 sm:text-5xl"> {price.price.amount}€</strong>
                                </p>

                            </div>

                            <div className="p-6 sm:px-8">
                                <p className="text-lg text-primary-600  sm:text-xl">{t("prices.include")}</p>

                                <ul className="mt-2 space-y-2 sm:mt-4">
                                    {price.includes.items.map(item => (
                                        <li key={item.text} className="flex items-center gap-1 ">
                                            <Check className={' size-5'} />
                                            {/* @ts-ignore */}
                                            <span className="text-primary-600 "> {t(item.text)} </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Prices
