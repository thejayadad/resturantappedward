
import { signOutUser } from "@/lib/user-auth"
import PendingButton from "./pending-button"
export default function SignOutbutton (){
    return (
        <form>
            <PendingButton label="Sign Out" variant="neutral" size="sm" formAction={signOutUser} />
        </form>
    )
}