"use client"

import React from 'react'
import { REGEXP_ONLY_DIGITS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp"
import { Button } from './ui/button'

interface OtpFormProps {
    setOtpCode: (code: string) => void;
}

const OtpForm: React.FC<OtpFormProps> = ({setOtpCode}) => {
    return (
        <div>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS} onChange={value => setOtpCode(value)}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </div>
    )
}

export default OtpForm
