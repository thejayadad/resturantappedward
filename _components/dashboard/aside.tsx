'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/cn"
import { DASHBOARD_NAV } from "./aside-data"


function isPathActive(pathname: string, href: string){
    if(pathname === href) return true
    if(pathname.startsWith(href.endsWith('/') ? href: href + '/')) return true
    return false
}
type NavButtonProps = {
    href: string;
    label: string;
    icon: React.ElementType;
    active: boolean
}

function NavButton ({href, label, icon:Icon, active}: NavButtonProps){
    return (
        <Link 
        title={label}
        aria-current={active ? 'page' : undefined}
        className={cn(
            'group flex items-center gap-0 lg:gap-3 rounded-xl px-3 py-2 transition',
            'text-neutral-700 hover:bg-neutral-100',
            'justify-center lg:justify-start',
            active && 'bg-neutral-200 text-neutral-900 ring-1 ring-neutral-300'
        )}
        data-active={active ? 'true' : 'false'}
        href={href}>
            <Icon className={cn(
                'h-5 w-5 shrink-0' 
            )} />
            <span className="text-sm lg:inline-block hidden">{label}</span>
        </Link>
    )
}

export default function Aside(){
    const pathname = usePathname()
    return (
        <aside className={cn (
            'h-full bg-white w-full ', 
            'px-2 py-4 lg:px-3'
        )}>
            <div className="mb-4 flex  items-center justify-center lg:justify-start">
                <div className="h-6 w-6 rounded bg-neutral-900" />
                <span className="ml-2 hidden lg:inline-block font-semibold">Admin</span>
            </div>
            <nav className="space-y-1">
                {DASHBOARD_NAV.map(item => (
                    <NavButton
                        key={item.href}
                        href={item.href}
                        label={item.label}
                        icon={item.icon}
                        active={isPathActive(pathname, item.href)}
                    />
                ))}
            </nav>
        </aside>
    )
}