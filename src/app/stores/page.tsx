'use client';

import ButtonLinkTwo from '@/components/button/ButtonLinkTwo';
import React from 'react'

const Stores = () => {
  return (
    <div className='flex flex-col items-center gap-6'>
      <h2 className='text-2xl'>Stores Page</h2>
      <div className="flex items-center justify-center gap-3">
        <ButtonLinkTwo url='/' btnText='Go back' />
        <ButtonLinkTwo url='/users' btnText='Get started' />
      </div>
    </div>
  )
}

export default Stores;