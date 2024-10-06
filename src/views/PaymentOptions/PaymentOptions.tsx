import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import React from 'react'
import { getI18n } from '../../../locales/server'
import ContactUs from '@/widgets/ContactUs'

const PaymentOptions = async () => {
    const t = await getI18n()

    return (
        <>
            <Card className="w-full bg-primary-100 flex flex-col gap-7">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center text-primary-600">{t('payments-options.heading')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-7">
                    <section aria-labelledby="bank-info-title">
                        <ul className="list-none space-y-2 text-primary-600">
                            <li><strong className='text-primary-600'>{t('payments-options.bank-name')}: </strong> Example Bank</li>
                            <li><strong className='text-primary-600'>{t('payments-options.account-name')}: </strong> Client Company Ltd.</li>
                            <li><strong className='text-primary-600'>{t('payments-options.account-number')}: </strong> 1234567890</li>
                            <li><strong className='text-primary-600'>IBAN: </strong> GB29 NWBK 6016 1331 9268 19</li>
                            <li><strong className='text-primary-600'>SWIFT/BIC: </strong> EXAMPLEGB2L</li>
                        </ul>
                    </section>

                    <section aria-labelledby="disclaimer-title">
                        <h2 id="disclaimer-title" className="text-xl font-semibold mb-2 text-primary-600">{t('payments-options.desclaimer-heading')}</h2>
                        <p className="text-sm text-primary-600">
                            {t('payments-options.desclaimer')}
                        </p>
                    </section>
                </CardContent>
            </Card>

            <ContactUs />
        </>
    )
}

export default PaymentOptions