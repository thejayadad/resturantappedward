
import type { ElementType } from "react";
import {LayoutDashboard, ListOrdered, Settings} from "lucide-react"

export type NavItem = {
    label: string
    href: string
    icon: ElementType
}

export const DASHBOARD_NAV: NavItem[] = [
    {label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard},
    {label: 'Categories', href: '/dashboard/categories', icon: ListOrdered},
    {label: 'Settings', href: '/dashboard/settings', icon: Settings},

]