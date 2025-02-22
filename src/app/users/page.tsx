"use client";

import ButtonNeutral from '@/components/button/ButtonNeutral';
import ButtonOne from '@/components/button/ButtonOne';
import ButtonTwo from '@/components/button/ButtonTwo';
import useForms from '@/hooks/useForms';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import BasicInfoForm from '@/components/forms/BasicInfoForm';
import InitialForm from '@/components/forms/InitialForm';
import StoreForm from '@/components/forms/StoreForm';
import ProductForm from '@/components/forms/ProductForm';
import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { INITIAL_USER_DATA } from '@/utils/data';
import { FormData } from '@/utils/types';
import { useAuthStore } from '@/context/AuthStoreContext';

const USER_DATA: FormData = INITIAL_USER_DATA;

const Users = () => {
  const [data, setData] = useState(USER_DATA);
  const {saveUserInfo} = useAuthStore();

  const updateFields = (fields: Partial<FormData>) => {
    setData(prev => {
      return {...prev, ...fields}
    });
  };

  const {currentStepIndex, currentStep, stepForward, stepBack, isFirstStep, isLastStep} = useForms([
    <InitialForm key="initial" {...data} updateFields={updateFields} />,
    <BasicInfoForm key="basic-info" {...data} updateFields={updateFields} />,
    <StoreForm key="store" {...data} updateFields={updateFields} />,
    <ProductForm key="product" {...data} updateFields={updateFields} />,
  ]);

  const router = useRouter();
  // console.log(currentStepIndex);
  
  const handleContinue = () => {
    stepForward();
  };
  
  const handleBack = () => {
    if(isFirstStep) {
      router.back()
    } else {
      stepBack();
    }
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return handleContinue();

    saveUserInfo(data);
    router.push('/products');
  };

  return (
    <section className="h-screen w-full flex-col">
      {currentStepIndex === 3 ?
        <div className="flex items-center justify-between pr-3 sm:pr-10 md:pr-16">
          <div className='px-2 sm:px-10 md:px-16 pt-3 pb-2 flex items-center gap-0 '>
            <ButtonNeutral
              onClick={handleBack}
              icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/arrow-back.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
            />
            <span className='font-semibold text-sm ml-1'>Product details</span>
          </div>
          <ButtonNeutral
            icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/MoreVertical.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
        </div>
        :
        <div className='px-2 sm:px-10 md:px-16 pt-3 pb-2 flex items-center gap-0 '>
          <ButtonNeutral
            onClick={handleBack}
            icon1={<div className="relative size-8 rounded-full hover:bg-customGray"><Image src="/images/arrow-back.svg" sizes="100%" fill alt="Arrow Left" className="rounded-full object-cover" /></div>}
          />
          <span className='font-semibold text-sm ml-1'>Get started</span>
        </div>
      }

      <form onSubmit={handleSubmit} className='h-fit min-h-[85%] flex flex-col gap-3'>
        {currentStepIndex === 3 ?
          <div className="px-5 sm:px-10 md:px-16 flex items-center justify-between gap-1 border-b pb-2">
            <button className='rounded-full p-1 px-2 border text-xs font-semibold text-neutral-600 flex items-center gap-2'>
              Draft
              <div className="relative size-4">
                <Image 
                  src="/images/check.svg" 
                  alt="Arrow Left" 
                  fill 
                  className="object-cover"
                  sizes="100%" 
                />
              </div>
            </button>
            <Link href='/products' className='text-primary text-sm font-semibold'>Preview product</Link>
          </div>
          :
          <div className="flex items-center gap-1 px-5 sm:px-10 md:px-16 ">
            <span className='h-1 flex-1 bg-primary rounded-md'></span>
            <span className={`${currentStepIndex === 1 || currentStepIndex > 1 ? 'bg-primary' : 'bg-customGray'} h-1 flex-1 rounded-md`}></span>
            <span className={`${currentStepIndex === 2 ? 'bg-primary' : 'bg-customGray'} h-1 flex-1 rounded-md`}></span>
          </div>
        }

        {currentStep}

        {currentStepIndex === 3 ?
          <div className="flex items-center justify-center gap-3 sm:gap-10 md:gap-24 border-t border-customGray pt-5 pb-10">
            <ButtonTwo onClick={handleBack} btnText="Cancel" classes='w-[42%] md:w-[38%] lg:w-[40%]' />
            <ButtonOne btnText="Save" classes='w-[42%] md:w-[38%] lg:w-[40%]' />
          </div>
          :
          <div className="flex items-center justify-center border-t border-customGray pt-4 pb-5">
            <ButtonOne btnText="Continue" classes='w-[80%] sm:w-[60%] md:w-[50%] lg:w-[30%]' />
          </div>
        }
      </form>
    </section>
  )
}

export default Users;