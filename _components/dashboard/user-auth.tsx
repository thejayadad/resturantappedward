
import { auth } from "@/auth"
import SignInButton from "./signin-btn"
import SignOutbutton from "./signout-btn"

export default async function UserAuth(){
    const session = await auth()
    const user = session?.user;
    if(!user){
        return <SignInButton />
    }
    return (
        <div>
            <SignOutbutton />
        </div>
    )
}