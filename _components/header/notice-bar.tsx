import {FiInfo} from "react-icons/fi"

export default function NoticeBar(){
    return (
        <div className="bg-neutral-100 text-neutral-700">
            <div className="mx-auto max-w-screen-xl flex items-center space-x-2 px-3 py-2 text-sm sm:px-4 lg:px-6">
                <FiInfo className="h-4 w-4" />
                <span>Add ons written in the notes will not be honored</span>
            </div>
        </div>
    )
}