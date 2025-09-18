import Link from "next/link";
import {FiMapPin} from "react-icons/fi"
export default function OrderingHeader(){
    return (
        <header className="bg-neutral-50 border-t border-neutral-200 ">
            <div className="mx-auto max-w-screen-xl px-3 py-8 sm:px-4 lg:px-6">
                <h1 className="font-semibold tracking-tight text-neutral-900 text-xl lg:text-2xl">Edward's Seafood Market</h1>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-neutral-600">
                    <span className="inline-flex items-center gap-1"><FiMapPin className="h-4 w-4" />2528 Brown Rd</span>
                    <span>|</span>
                    <span>Open Until <span>9:00pm</span></span>
                    <span>|</span>
                    <Link href={'/'}>More Info</Link>
                </div>
            </div>
        </header>
    )
}