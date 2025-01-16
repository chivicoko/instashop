import React from 'react'
import ButtonNeutral from './button/ButtonNeutral';
import Image from 'next/image';
import { productOptions } from '@/utils/data';
import { ProductOptionsProps } from '@/utils/types';

const ProductOptions: React.FC = () => {
  return (
    <>
        {productOptions.map((productOption: ProductOptionsProps, index: number) => (

            <div key={productOption.id} className="w-full flex flex-col gap-1 border rounded-xl py-2 divide-y-2 divide-neutral-100">
                <div className="flex items-center gap-3 justify-between px-3">
                <div className="flex flex-col">
                    <p className='text-sm font-semibold text-neutral-500 capitalize'>Option {index+1}</p>
                    <p className='w-full font-semibold text-sm capitalize'>{productOption.name}</p>
                </div>
                <span>
                    <ButtonNeutral
                    icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/Icon button.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                    />
                </span>
                </div>

                <div className="px-3 py-2 space-y-2">
                <div className="flex items-center gap-2 flex-wrap">
                    {productOption.options.map(option => (
                    <span key={option.id} className='bg-customGray uppercase py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span>{option.text}</span>
                        <span>
                        <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                        />
                        </span>
                    </span>
                    ))}
                </div>
                <input type="text" placeholder='Enter values' className='w-full p-2 border-0 text-sm focus:outline-none focus:ring-[1px] focus:ring-primary rounded-lg' />
                </div>
            </div>
        ))}
    </>
  )
}

export default ProductOptions;