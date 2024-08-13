'use client'

import {Card, CardContent, CardFooter} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import Link from "next/link"
import {useRouter} from "next/navigation";
import {useState} from "react";

export default function Component() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async () => {
        if (!username || !password) {
            alert('Enter credentials')
        }

        const res = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        if (res.ok) {
            const {token} = await res.json();
            localStorage.setItem('token', token);
            router.push('/');
        }
    };

    return (
        <div className="mx-auto max-w-md space-y-6 mt-20">
            <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold">Welcome back</h1>
                <p className="text-muted-foreground">Enter your username and password to access your account.</p>
            </div>
            <Card>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type={'text'}
                            id="username"
                            placeholder="username"
                            required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button onClick={handleSubmit} className="w-full">
                        Sign in
                    </Button>
                </CardFooter>
            </Card>
            <div className="text-center text-sm text-muted-foreground">
                <Link href="/registration" className="underline underline-offset-4" prefetch={false}>
                    Register new account
                </Link>
            </div>
        </div>
    )
}