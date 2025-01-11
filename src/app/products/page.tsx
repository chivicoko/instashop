"use client";

import ButtonLinkOne from '@/components/button/ButtonLinkOne'
import ButtonNeutral from '@/components/button/ButtonNeutral'
import ProductPreview from '@/components/ProductPreview'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Products = () => {
  const router = useRouter();

  return (
    <section className="h-screen w-full flex-col">
      <div className="flex items-center justify-between pr-3 sm:pr-10 md:pr-16">
        <div className='px-2 sm:px-10 md:px-16 pt-3 pb-2 flex items-center gap-0 '>
          <ButtonNeutral
            onClick={() => router.back()}
            icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/arrow-back.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
          <span className='font-semibold text-sm ml-1'>Product preview</span>
        </div>
        <ButtonNeutral
          icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/MoreVertical.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
        />
      </div>

      <div className='h-fit min-h-[85%] flex flex-col gap-3 pb-6'>
        <ProductPreview/>
      </div>
      
      <div className="flex items-center justify-center border-t border-customGray pt-5 pb-10">
        <ButtonLinkOne url='/stores' btnText="Publish" classes='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%]' />
      </div>
    </section>
  )
}

export default Products;