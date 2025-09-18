import React from 'react'
import { auth } from '@/auth'
import { createOrGetRestaurant } from '@/lib/actions/restaurant/get-user-restaurant'
import { redirect } from 'next/navigation'
import { prisma } from '@/lib/prisma'

const DashboardPage = async () => {
  const session = await auth()
  const userEmail = session?.user?.email
  if(!userEmail){
    return <p className='text-red-600'>Must be logged in & authorized to view this page</p>
  }
  const existing = await prisma.restaurant.findFirst({
    where: {userEmail},
    select: {id: true, name: true}
  })
  if(existing){
    return (
      <main>
        <h1>{existing.name}</h1>
      </main>
    )
  }

  return (
    <div>
      <form
      className='flex'
      action={createOrGetRestaurant}>
      <div>
        <label>Restaurant Name</label>
        <input
          name='name'
          placeholder='Restaurant name here...'
          className='input'
        />
        <button className='btn'>Create Restaurant</button>
      </div>
      </form>
    </div>
  )
}

export default DashboardPage