import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { Button } from "@/components/ui/button"


export const metadata = {
    title: "Login"
}

export default function LoginPage() {
    return (
        <main className="h-dvh flex flex-col items-center gap-6 text-4xl p-4">
            <h1>Repair Shop</h1>
            <Button asChild>
                <LoginLink>Sign in</LoginLink>
            </Button>
        </main>
    )
}

/**
 * asShild makes the button a link with button stylings
 */