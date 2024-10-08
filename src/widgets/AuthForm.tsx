"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import { axiosClient } from "@/shared/api/axiosClient"

interface AuthPayload {
    username: string,
    password: string
}

export default function AuthForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const authenticateAdmin = async (payload: AuthPayload) => {
        try {
            await axiosClient.post('/sign-in', { ...payload }, { withCredentials: true })
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (!username || !password) {
            setError("Please fill in all fields")
            return
        }

        console.log("Login submitted:", { username, password })
        authenticateAdmin({ username, password })
    }

    return (
        <Card className="w-full max-w-md ">
            <CardHeader>
                <CardTitle className="text-primary-600">Authentication</CardTitle>
                <CardDescription>Please enter your login and password</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="login">Login</Label>
                        <Input
                            id="login"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && (
                        <div className="flex items-center text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4 mr-2" />
                            {error}
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full bg-primary-600">Sign In</Button>
                </CardFooter>
            </form>
        </Card>
    )
}