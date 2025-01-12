'use client';

import React, { useState } from 'react'
import InputOne from '../inputs/InputOne';
import ButtonNeutral from '../button/ButtonNeutral';
import Image from 'next/image';
import InputTwo from '../inputs/InputTwo';

const ProductForm = () => {
  const [basicDetailsOpen, setBasicDetailsOpen] = useState<boolean>(true);
  const [productImagesOpen, setProductImagesOpen] = useState<boolean>(true);
  const [inventoryVariantsOpen, setInventoryVariantsOpen] = useState<boolean>(true);
  const [shippingOpen, setShippingOpen] = useState<boolean>(true);

  const handleBasicDetailsToggle = () => setBasicDetailsOpen((prev) => !prev);
  const handleProductImagesToggle = () => setProductImagesOpen((prev) => !prev);
  const handleInventoryVariantsToggle = () => setInventoryVariantsOpen((prev) => !prev);
  const handleShippingToggle = () => setShippingOpen((prev) => !prev);

  return (
    <div className='min-h-[85vh] h-fit pb-6'>
      <div className="flex flex-col md:flex-row space-y-3 md:space-x-16 lg:space-x-24 mt-2 mb-2 px- sm:px-10 md:px-12 lg:px-20 divide-y-2 divide-neutral-100 md:divide-y-0">
      
        <div className='w-full md:w-1/2 space-y-6 md:space-y-10 divide-y-2 divide-neutral-100 md:divide-y-0'>
          <div>
            <div className='px-4 md:px-4 pt-2 pb-2 flex items-center gap-0 '>
              <p className='w-full font-semibold text-sm ml-1'>Basic details</p>
              <ButtonNeutral
                onClick={handleBasicDetailsToggle}
                icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${basicDetailsOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
              />
            </div>
            {basicDetailsOpen && 
            <div className="space-y-3 mt-[6px] px-4 md:px-4">

              <InputTwo autoFocus required classes='w-full' floatingLabel='Product Title' />
              <InputTwo required classes='w-full' floatingLabel='Product description' />
              <div className="flex items-center justify-between gap-2">
                <InputTwo required classes='w-[100%]' floatingLabel='Price' />
                <InputTwo required classes='w-[100%]' floatingLabel='Old price' />
              </div>
              <InputTwo required classes='w-full' floatingLabel='Product collections' />
              
              <div className="w-full flex flex-col gap-1 border rounded-xl pt-2">
                <div className="flex items-center gap-3 justify-between px-3">
                  <p className='text-sm text-neutral-500'>Product collections</p>
                </div>

                <div className="px-1 py-2 space-y-2">
                  <div className="flex items-center gap-2 flex-wrap px-2">
                    <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                      <span className='capitalize'>Collection</span>
                      <span>
                        <ButtonNeutral
                          icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                        />
                      </span>
                    </span>
                    <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                      <span className='capitalize'>Interest</span>
                      <span>
                        <ButtonNeutral
                          icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                        />
                      </span>
                    </span>
                  </div>
                  <input type="text" placeholder='Search or create collection' className='w-full p-2 border-0 text-sm focus:outline-none focus:ring-[1px] focus:ring-primary rounded-lg' />
                </div>
              </div>

              <InputTwo required classes='w-full' floatingLabel='Inventory stocks' />
            </div>
            }
          </div>

          <div>
            <div className='px-4 md:px-4 pt-3 pb-2 flex items-center gap-0 '>
              <p className='w-full font-semibold text-sm ml-1'>Product Images</p>
              <ButtonNeutral
              onClick={handleProductImagesToggle}
                icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${productImagesOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
              />
            </div>
              
            <div className="space-y-3 mt-[6px] px-4 md:px-4">
              {productImagesOpen &&
                [...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center gap-3 justify-between">
                    <div className="flex flex-col items-center gap-2">
                        <div className='flex items-center gap-2'>
                          <div className="relative size-16 rounded-xl">
                            <Image
                              key={index}
                              src="/images/Frame 132.svg"
                              alt="Shopping Sale's icon"
                              fill
                              className='object-cover rounded-xl'
                              sizes="100%"
                            />
                          </div>
                          <span className='text-xs'>logo.lmg</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                      <span>
                        <ButtonNeutral
                          icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/Icon button.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                        />
                      </span>
                      
                      <label htmlFor="toggleSwitch" className="flex items-center cursor-pointer">
                        <div className="relative">
                          <input type="checkbox" checked onChange={() => {}} id="toggleSwitch" className="sr-only peer" />
                          <div className="block w-10 h-6 rounded-full bg-neutral-300 peer-checked:bg-primary transition-colors"></div>
                          <div className="dot absolute left-1 top-1 size-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
                        </div>
                      </label>
                      {/* <span>
                        <ButtonNeutral
                          icon1={<div className="relative w-8 h-5 rounded-full hover:bg-customGray"><Image src="/images/ToggleBtn.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                        />
                      </span> */}
                    </div>
                  </div>
                ))
              }

              <div className="w-full py-5 rounded-full bg-customGray hover:bg-neutral-200">
                <label htmlFor="image" tabIndex={0} className='relative w-full flex items-center gap-2 font-semibold cursor-pointer'>
                  <p className='text-xs text-primary absolute left-24 -translate-y-1/2 top-1/2'>Add image</p>
                  <div className="size-8 absolute left-40 -translate-y-1/2 top-1/2">
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
          </div>
        </div>

        <div className='w-full md:w-1/2 space-y-6 md:space-y-10 divide-y-2 divide-neutral-100 md:divide-y-0'>    
          <div>
            <div className='pt-3 mb-4 flex items-center gap-0 px-4 md:px-4'>
              <p className='w-full font-semibold text-sm ml-1'>Inventory Variations</p>
              <ButtonNeutral
                onClick={handleInventoryVariantsToggle}
                icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${inventoryVariantsOpen ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
              />
            </div>
            {inventoryVariantsOpen &&
            <>
              <div className="w-full flex items-center gap-3 mt-[6px] px-6 md:px-8 mb-4">
                <input 
                  type="checkbox" 
                  id="variableProduct"
                  onChange={() => {}}
                  className=" size-4 border checked:border-transparent rounded-sm border-gray-300 appearance-none cursor-pointer custom-checkbox" 
                />
                <p id='variableProduct' className='text-xs'>This product is variable; has different colors, sizes, weight, materials, etc.</p>
              </div>
              <div className="space-y-2 mb-4 px-4 md:px-4">
                <div className="w-full flex flex-col gap-1 border rounded-xl py-2 divide-y-2 divide-neutral-100">
                  <div className="flex items-center gap-3 justify-between px-3">
                    <div className="flex flex-col">
                      <p className='text-sm font-semibold text-neutral-500'>Option 1</p>
                      <p className='w-full font-semibold text-sm'>Color</p>
                    </div>
                    <span>
                      <ButtonNeutral
                        icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/Icon button.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                      />
                    </span>
                  </div>

                  <div className="px-3 py-2 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span>Red</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span>White</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span>Black</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                    </div>
                    <input type="text" placeholder='Enter values' className='w-full p-2 border-0 text-sm focus:outline-none focus:ring-[1px] focus:ring-primary rounded-lg' />
                  </div>
                </div>
                
                <div className="w-full flex flex-col gap-1 border rounded-xl py-2 divide-y-2 divide-neutral-100">
                  <div className="flex items-center gap-3 justify-between px-3">
                    <div className="flex flex-col">
                      <p className='text-sm font-semibold text-neutral-500'>Option 2</p>
                      <p className='w-full font-semibold text-sm'>Size</p>
                    </div>
                    <span>
                      <ButtonNeutral
                        icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/Icon button.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                      />
                    </span>
                  </div>

                  <div className="px-3 py-2 space-y-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span className='uppercase'>sm</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span className='uppercase'>md</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span className='uppercase'>lg</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                      <span className='bg-customGray py-1 px-3 rounded-full text-xs flex items-center gap-2'>
                        <span className='uppercase'>xl</span>
                        <span>
                          <ButtonNeutral
                            icon1={<div className="relative size-4 rounded-full hover:bg-neutral-300 p-2"><Image src="/images/close.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} /></div>}
                          />
                        </span>
                      </span>
                    </div>
                    <input type="text" placeholder='Enter values' className='w-full p-2 border-0 text-sm focus:outline-none focus:ring-[1px] focus:ring-primary rounded-lg' />
                  </div>
                </div>
              </div>
            </>
            }

            <div className='px-4 md:px-4'>
              <div className="py-5 rounded-full bg-customGray hover:bg-neutral-200">
                <label htmlFor="image" tabIndex={0} className='relative w-full flex items-center gap-2 font-semibold cursor-pointer text-center'>
                  <p className='text-center text-2xl font-light text-primary absolute left-20 -translate-y-1/2 top-1/2'>+</p>
                  <p className='text-center text-xs text-primary absolute left-[104px] -translate-y-1/2 top-1/2'>Add new option</p>
                </label>
                <InputOne id='image' type='file' classes="hidden text-center" />
              </div>
            </div>
          </div>

          <div>
            <div className='px-4 md:px-4 pt-3 pb-2 flex items-center gap-0 '>
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
                <input 
                  type="checkbox" 
                  id="variableProduct"
                  checked
                  onChange={() => {}}
                  className="size-4 border checked:border-transparent rounded-sm border-gray-300 appearance-none cursor-pointer custom-checkbox" 
                />
              </div>
              <div className="w-full flex items-center justify-between gap-3">
                <p className='text-xs'>InstaShop shipping</p>
                <input 
                  type="checkbox"
                  id="variableProduct"
                  onChange={() => {}} 
                  className="size-4 border checked:border-transparent rounded-sm border-gray-300 appearance-none cursor-pointer custom-checkbox" 
                />
              </div>
            </div>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductForm;