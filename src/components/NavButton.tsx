import { LucideIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props = {
    icon: LucideIcon,
    label: string,
    href?: string,
}

export function NavButton({
    icon: Icon,
    label,
    href
}: Props){
    return (
        <Button 
            variant="ghost"
            size="icon"
            aria-label= {label}
            title={label}
            className="rounded-full"
            asChild
        >
            {href 
                ? (<Link href = {href}><Icon /></Link>)
                : ( <Icon />)
            }
        </Button>
    )
}


/**
 * Aschild wil hier zeggen dat als je een link in de knop stopt, dat de knop zelf een link wordt
 * Maar je blijft wel je knop styling behouden
 * Semantisch gezien en ook vanuit toehankelijkheid is een link in een knop stoppen niet correct
 * op deze manier wel
 */
