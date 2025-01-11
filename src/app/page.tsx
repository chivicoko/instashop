
import ButtonLinkOne from '@/components/button/ButtonLinkOne';
import { welcomeMessages } from '@/utils/data';
import Image from 'next/image';
import React from 'react'

export default function Home() {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center gap-4 md:gap-0 pt-8 pb-4 md:pt-0 md:pb-0">

      <div className='flex md:hidden lg:flex items-center justify-center px-5 w-full md:w-1/2 md:h-full'>
        <div className="relative w-[296px] h-[210px] lg:w-[485px] lg:h-[340px] xl:w-[565px] xl:h-[400px]">
          <Image
            src="/images/Shopping Sale.svg"
            alt="Shopping Sale's icon"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-between gap-4 md:w-2xl mx-auto lg:w-1/2">
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center px-10 mt-1 text-center">
            <h1 className='mb-1 text-4xl font-bold'>Welcome</h1>
            <p className='text-sm'>The safest platfrom to shop from social media vendors</p>
          </div>

          <div className="w-[80%] rounded-xl space-y-2 bg-[#FFEAFA] border border-primary py-3 px-4">
            {welcomeMessages.map(message => (
              <div key={message.id} className='flex items-center gap-2'>
                <div className="relative size-4">
                  <Image
                    src="/images/check_circle.svg"
                    alt="Shopping Sale's icon"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="100%"
                  />
                </div>
                <p className='text-sm font-semibold'>{message.info}</p>
              </div>
            ))}
          </div>
        </div>
        
        <ButtonLinkOne url='/users' btnText="Get started" classes="w-[80%] md:w-[40%] lg:w-[60%] xl:w-[40%] mt-6 mb-8" />
      </div>
    </section>
  );
}
