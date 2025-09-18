
'use client'
import { cn } from "@/lib/cn"
import { useFormStatus } from "react-dom"

type Variant = 'primary' | "neutral" | "ghost";
type Size = "sm" | "md";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    label: string;
    variant?: Variant;
    size?: Size
}
export default function PendingButton({label, variant="primary", size='sm', className, ...props}:Props){
    const {pending} = useFormStatus()
    const variantClass = 
    variant === "primary" ? "btn btn-primary rounded-xl":
    variant === "neutral" ? "btn btn-neutral": "btn btn-ghost rounded-xl";
    const sizeClass = size === "sm" ? "btn-sm" : ""
    return(
        <button
        type="submit"
        disabled={pending}
        {...props}
        className={cn (
            variantClass, sizeClass, "gap-2", className
        )}
        >
            {pending && <span className="loading loading-spinner rounded-xl" />}
            {label}
        </button>
    )
}