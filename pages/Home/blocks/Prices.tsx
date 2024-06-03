import React from 'react'
import { priceItems } from '@/shared/consts'
import Check from '@/assets/icons/Check'
const Prices = () => {
    return (
        <>
            <div className="flex flex-col items-center px-4 py-8 sm:px-6 sm:py-12 ">
                <h2 className='text-5xl font-bold text-primary-600 m-auto'>Цены</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8 sm:py-12 lg:px-8 lg:pt-24 lg:pb-18">
                    {priceItems.map(price => (
                        <div key={`price-${price.price.amount}`} className={`divide-y divide-gray-200 rounded-2xl border border-gray-200 shadow-sm bg-white ${price.priority && 'lg:relative lg:bottom-14'}`}>
                            <div className="p-6 sm:px-8">
                                <h2 className="text-3xl text-center font-medium text-primary-600">
                                    {price.title}
                                    <span className="sr-only">Plan</span>
                                </h2>

                                <p className="mt-2 sm:mt-4 text-center">
                                    <strong className="text-3xl font-bold text-primary-600 sm:text-5xl"> {price.price.amount}€</strong>
                                </p>

                                <a
                                    className="mt-4 block rounded border border-primary-600 bg-primary-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-transparent hover:text-primary-600 focus:outline-none focus:ring active:text-primary-500 sm:mt-6"
                                    href="#"
                                >
                                    Узнать больше
                                </a>
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
