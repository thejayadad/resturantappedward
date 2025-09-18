'use server'
import {prisma} from "@/lib/prisma"
import { auth } from "@/auth"
import { redirect } from "next/navigation"

export async function createOrGetRestaurant(prevState: any, formData: FormData){
    const session = await auth()
    const userEmail = session?.user?.email
    if(!userEmail){
        return {error: "You must be logged in"} as const;
    }
    const name = String(formData.get('name') || "").trim()
    if(!name){
        return {error: "Restaurant name is required"} as const
    }
    const existingForUser = await prisma.restaurant.findFirst({
        where: {userEmail},
        select: {id: true},
    })
    if(existingForUser){
        redirect(`/dashboard/${existingForUser.id}`)
    }
    try {
        const created = await prisma.restaurant.create({
            data: {name, userEmail},
            select: {id: true}
        })
        redirect(`/dashboard/${created.id}`)
    } catch (error) {
        console.log("Error " + error)
    }
}