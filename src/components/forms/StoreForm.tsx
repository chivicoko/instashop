import React from 'react'
import InputOne from '../inputs/InputOne';
import Image from 'next/image';
import InputTwo from '../inputs/InputTwo';
import { UserStoreDataProps } from '@/utils/types';

type storeFormProps = UserStoreDataProps & {
  updateFields: (fields: Partial<UserStoreDataProps>) => void
}

const StoreForm = ({storeName, storeTagName, storePhoneNumber, storeEmail, storeCategory, updateFields}: storeFormProps) => {

  return (
    <div className='h-[75vh] px-5 md:px-5 space-y-3 mx-auto max-w-xl w-full'>
      <div className="w-full min-h-32 h-fit relative py-3 rounded-xl border ">
        <label htmlFor="image" tabIndex={0} className='w-full flex flex-col items-center gap-2 font-semibold cursor-pointer absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 group'>
          <div className="relative size-20">
            <Image
              src="/images/Avatar.svg"
              alt="Shopping Sale's icon"
              fill
              className='border rounded-full object-cover'
              sizes="100%"
            />
          </div>
          <div className="size-8 group-hover:size-9 absolute left-1/2 -translate-x-1/2 -translate-y-3/4 top-1/2">
            <Image
              src="/images/add_photo_alternate.svg"
              alt="Shopping Sale's icon"
              fill
              className='rounded-full object-cover'
              sizes="100%"
            />
          </div>
          <p className='text-xs'>Upload store logo</p>
        </label>
        <InputOne id='image' type='file' classes="hidden" />
      </div>

      <div className="space-y-3">
        <InputTwo autoFocus required value={storeName} onChange={e => updateFields({storeName: e.target.value})} classes='w-full' floatingLabel='Store name' />
        <InputTwo required value={storeTagName} onChange={e => updateFields({storeTagName: e.target.value})} classes='w-full' floatingLabel='Store tag name' />
        <InputTwo required value={storePhoneNumber} onChange={e => updateFields({storePhoneNumber: e.target.value})} classes='w-full' floatingLabel='Store phone number' />
        <InputTwo required value={storeEmail} onChange={e => updateFields({storeEmail: e.target.value})} classes='w-full' floatingLabel='Store email' />
        <InputTwo required value={storeCategory} onChange={e => updateFields({storeCategory: e.target.value})} classes='w-full' floatingLabel='Category' />
      </div>
    </div>
  )
}

export default StoreForm;