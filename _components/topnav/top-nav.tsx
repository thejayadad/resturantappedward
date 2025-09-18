
import Link from "next/link"
import {FiUser, FiShoppingCart} from "react-icons/fi"

export default function TopNav (){
    return (
        <div className="border-b border-neutral-200 bg-white">
            <div className="flex h-12 mx-auto max-w-screen-xl items-center justify-between px-3 text-sm sm:px-4 lg:px-6">
                <Link
                className="font-medium"
                href={'/'}>
                    Edward's Fish Market
                </Link>
                <div className="flex items-center space-x-3">
                    <div>
                        <div className="flex items-center space-x-1">
                            <span className="text-neutral-400">LogIn</span>
                             <FiUser className="h-4 w-4" />
                        <div className="flex items-center space-x-1">
                            <span className="text-neutral-400">Cart</span>
                            <FiShoppingCart className="h-4 w-4" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}