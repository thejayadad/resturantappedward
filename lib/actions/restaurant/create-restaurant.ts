'use server'
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";

export async function createRestaurant(formData: FormData){
    const name = String(formData.get("name") || "").trim();
    const userEmail = String(formData.get("userEmail") || "").trim()

    if(!name) throw new Error("Restaurant name is required");
    if(!userEmail) throw new Error("Authenicated user required")
    const exisiting = await prisma.restaurant.findFirst({
    where: {userEmail},
    select: {id: true, name: true},
})
    if(exisiting){
        return exisiting
    }
    return prisma.restaurant.create({
        data: {name, userEmail},
        select: {id: true, name: true}
    })

}