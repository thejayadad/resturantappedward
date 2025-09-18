
import { signInWithGoogle } from "@/lib/user-auth"
import PendingButton from "./pending-button"

export default function SignInButton(){
    return (
        <form>
            <PendingButton label="SignIn" size="sm" formAction={signInWithGoogle} />
        </form>
    )
}