'use client';

import React, { useState } from 'react'
import InputOne from '../inputs/InputOne';
import ButtonNeutral from '../button/ButtonNeutral';
import Image from 'next/image';

const ProductForm = () => {
  const [basicDetailsOpen, setBasicDetailsOpen] = useState<boolean>(false);
  const [productImagesOpen, setProductImagesOpen] = useState<boolean>(false);
  const [inventoryVariantsOpen, setInventoryVariantsOpen] = useState<boolean>(false);
  const [shippingOpen, setShippingOpen] = useState<boolean>(false);

  const handleBasicDetailsToggle = () => setBasicDetailsOpen((prev) => !prev);
  const handleProductImagesToggle = () => setProductImagesOpen((prev) => !prev);
  const handleInventoryVariantsToggle = () => setInventoryVariantsOpen((prev) => !prev);
  const handleShippingToggle = () => setShippingOpen((prev) => !prev);

  return (
    <div className='min-h-[80vh] h-fit'>
      <div className="flex flex-col gap-4 divide-y-2 divide-neutral-100">
        
        <div>
          <div className='px-2 md:px-2 pt-2 pb-2 flex items-center gap-0 '>
            <p className='w-full font-semibold text-sm ml-1'>Basic details</p>
            <ButtonNeutral
              onClick={handleBasicDetailsToggle}
              icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${basicDetailsOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
            />
          </div>
          {basicDetailsOpen && 
          <div className="space-y-3 mt-[6px] px-4 md:px-4">
            <InputOne autoFocus required placeholderText='Product Title' classes='w-full' />
            <InputOne required placeholderText='Product description' classes='w-full' />
            <div className="flex items-center gap-2">
              <InputOne required placeholderText='Price' classes='w-1/2' />
              <InputOne required placeholderText='Old price' classes='w-1/2' />
            </div>
            <InputOne required placeholderText='Product collections' classes='w-full' />
            <InputOne required placeholderText='Inventory stocks' classes='w-full' />
          </div>
          }
        </div>

        <div>
          <div className='px-2 md:px-2 pt-3 pb-2 flex items-center gap-0 '>
            <p className='w-full font-semibold text-sm ml-1'>Product Images</p>
            <ButtonNeutral
            onClick={handleProductImagesToggle}
              icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${productImagesOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
            />
          </div>
          {productImagesOpen && 
          <div className="space-y-3 mt-[6px] px-4 md:px-4">
            
            <div className="w-full relative py-5 rounded-full bg-customGray hover:bg-neutral-200">
              <label htmlFor="image" tabIndex={0} className='w-full flex items-center gap-2 font-semibold cursor-pointer absolute left-24 -translate-y-1/2 top-1/2'>
                <p className='text-xs text-primary'>Add image</p>
                <div className="size-8 relative">
                  <Image
                    src="/images/add_photo_alternate2.svg"
                    alt="Shopping Sale's icon"
                    fill
                    className='rounded-full object-cover'
                    sizes="100%"
                  />
                </div>
              </label>
              <InputOne id='image' type='file' classes="hidden" />
            </div>

          </div>
          }
        </div>

        <div>
          <div className='px-2 md:px-2 pt-3 pb-2 flex items-center gap-0 '>
            <p className='w-full font-semibold text-sm ml-1'>Inventory Variations</p>
            <ButtonNeutral
            onClick={handleInventoryVariantsToggle}
              icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${inventoryVariantsOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
            />
          </div>
          {inventoryVariantsOpen && 
          <div className="w-full flex items-center gap-3 mt-[6px] px-10 md:px-10">
            <InputOne type='checkbox' required placeholderText='Enter phone number or email' classes='' />
            <p className='text-xs'>This product is variable; has different colors, sizes, weight, materials, etc.</p>
          </div>
          }
        </div>

        <div>
          <div className='px-2 md:px-2 pt-3 pb-2 flex items-center gap-0 '>
            <p className='w-full font-semibold text-sm ml-1'>Shipping</p>
            <ButtonNeutral
            onClick={handleShippingToggle}
              icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${shippingOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
            />
          </div>
          {shippingOpen && 
          <div className="w-full space-y-5 mt-5 px-4 md:px-4">
            <div className="w-full flex items-center justify-between gap-3">
              <p className='text-xs'>Self shipping</p>
              <input type='checkbox' checked className='bg-white rounded-md focus:ring-2 ring-offset-1 focus:ring-primary checked:bg-primary fill-primary' />
            </div>
            <div className="w-full flex items-center justify-between gap-3">
              <p className='text-xs'>InstaShop shipping</p>
              <input type='checkbox' className='bg-white rounded-md focus:ring-2 ring-offset-1 focus:ring-primary checked:bg-primary fill-primary' />
            </div>
          </div>
          }
        </div>

      </div>
    </div>
  )
}

export default ProductForm;