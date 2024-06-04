import React from 'react'
import { priceItems } from '@/shared/consts'
import Check from '@/assets/icons/Check'
const Prices = () => {
    return (
        <>
            <div className="flex flex-col gap-6 sm:items-center py-8 sm:px-6 sm:py-12">
                <h2 className='text-5xl font-bold text-primary-600 m-auto'>Цены</h2>
                <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:py-12 lg:px-8 lg:pt-24 lg:pb-18">
                    {priceItems.map(price => (
                        <div key={`price-${price.price.amount}`} className={`divide-y relative flex-none divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white ${price.priority && 'lg:relative lg:bottom-14'}`}>
                            <div className="p-6 sm:px-8">
                                <h2 className="text-3xl text-center font-medium text-primary-600">
                                    {price.title}
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4 text-center">
                                    <strong className="text-3xl font-bold text-primary-600 sm:text-5xl"> {price.price.amount}€</strong>
                                </p>

                            </div>

                            <div className="p-6 sm:px-8">
                                <p className="text-lg text-primary-600 font-extrabold sm:text-xl">Включает:</p>

                                <ul className="mt-2 space-y-2 sm:mt-4">
                                    {price.includes.items.map(item => (
                                        <li key={item.text} className="flex items-center gap-1 ">
                                            <Check className={'font-extrabold size-5'} />
                                            <span className="text-primary-600 font-extrabold"> {item.text} </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <span id="contact-us" className='invisible'></span>
        </>
    )
}

export default Prices
