

import React from 'react'
import TopNav from '@/_components/topnav/top-nav';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='h-full bg-white text-neutral-800'>
        <TopNav />
        {children}
    </div>
  )
}

export default layout