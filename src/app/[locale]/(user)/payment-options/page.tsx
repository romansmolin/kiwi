import React, { Suspense } from 'react'
import { LoadingSkeleton } from '@/components'
import PaymentOptions from '@/views/PaymentOptions/PaymentOptions'



const PaymentOptionsPage = () => {	
	return (
			<Suspense fallback={<LoadingSkeleton />}>
                <PaymentOptions />
			</Suspense>
	)
}

export default PaymentOptionsPage
