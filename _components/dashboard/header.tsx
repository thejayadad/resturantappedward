

import React from 'react'
import UserAuth from './user-auth'

const Header = () => {
    
  return (
    <header className='w-full h-full border-b border-dotted border-neutral-200 bg-base-100'>
        <div className='flex items-center h-full justify-end'>
            <UserAuth />
        </div>
    </header>
  )
}

export default Header