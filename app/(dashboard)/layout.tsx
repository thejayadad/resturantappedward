

import React from 'react'
import Aside from '@/_components/dashboard/aside';
import Header from '@/_components/dashboard/header';
const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-full bg-neutral-50 grid grid-cols-12'>
        <aside className='border-r border-dotted border-neutral-200 h-full col-span-2 w-full flex items-center flex-col'>
          <Aside />
        </aside>
        <main className='col-span-10 w-full'>
          <div className='w-full px-4 h-14'>
            <Header />
          </div>
          {children}
        </main>
    </div>
  )
}

export default layout