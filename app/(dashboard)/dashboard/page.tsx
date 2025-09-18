import React from 'react'
import { auth } from '@/auth'
const DashboardPage = async () => {
  const session = await auth()
  const userEmail = session?.user?.email
  return (
    <div>
      {userEmail}
    </div>
  )
}

export default DashboardPage