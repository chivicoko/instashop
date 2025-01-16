import React, { useState } from 'react'
import Image from 'next/image';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { collections, colors, sizes, someImages, stars } from '@/utils/data';
import ButtonNeutral from './button/ButtonNeutral';

const ProductPreview = () => {
  const [productDescription, setProductDescription] = useState<boolean>(true);
  const [moreDescription, setMoreDescription] = useState<boolean>(false);
  const [thisVendor, setThisVendor] = useState<boolean>(true);

  const handleProductDescriptionToggle = () => setProductDescription((prev) => !prev);
  const handleMoreDescriptionToggle = () => setMoreDescription((prev) => !prev);
  const handleThisVendorToggle = () => setThisVendor((prev) => !prev);
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className='min-h-[80vh] h-fit'>
      <Slider {...settings}>
        {someImages.map((image, index) => (
          <div key={image.id} className="relative w-full md:w-1/2 h-[62vh]">
            <Image
              src={image.img || "/images/imagePlaceholder.jpeg"}
              alt="Shopping Sale's icon"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              // sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              blurDataURL="/images/imagePlaceholder.jpeg"
              placeholder="blur"
            />
            <span className='size-8 flex items-center justify-center text-sm rounded-full bg-[#00000027] shadow-md text-white absolute bottom-2 right-2'>
              {index+1}/{someImages.length}
            </span>
          </div>
        ))}
      </Slider>

      <div className="flex flex-col md:flex-row space-y-3 md:space-x-16 lg:space-x-24 mt-2 mb-2 px-3 sm:px-10 md:px-12 lg:px-20 divide-y-2 divide-neutral-100 md:divide-y-0">
        <div className='w-full md:w-1/2 md:space-y-10 divide-y-2 divide-neutral-100 md:divide-y-0'>
          <div className="flex flex-col items-center gap-3 mt-2 md:mt-10">
            <div className="w-full flex items-center justify-between gap-3">
              <p className='text-sm font-semibold'>Gucci bag - the epitome of luxury and sophistication</p>
              <div className="flex items-center gap-1">
                <button className="relative size-8 rounded-full hover:bg-customGray">
                  <Image src="/images/Icon button 1.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} />
                </button>
                <button className="relative size-8 rounded-full hover:bg-customGray">
                  <Image src="/images/Icon button 2.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <p className='text-xl font-semibold'>₦18.0</p>
                <p className='text-xs text-neutral-400'>₦28.0</p>
                <p className='text-xs text-white bg-primary rounded-full py-1 px-2'>25% off</p>
              </div>
              <div className="flex items-center gap-1">
                {stars.map(star => (
                  <div key={star.id} className="relative size-3 rounded-full hover:bg-customGray">
                    <Image src={star.img} sizes="100%" fill alt="Arrow Left" className="object-cover" />
                  </div>
                ))}
                <p className='text-xs text-neutral-400'>(5 sold)</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-4">
            <p className='text-sm font-semibold'>Select variants</p>
            <div className='w-full flex flex-col lg:flex-row lg:justify-between gap-3 md:gap-6'>
              <div className='lg:w-1/2'>
                <p className='text-xs text-neutral-500 font-semibold mb-1'>Size: <span className='text-neutral-600 uppercase'>small</span></p>
                <div className="flex items-center gap-2 flex-wrap">
                  {sizes.map(size => (
                    <span key={size.id} className='uppercase bg-customGray hover:bg-secondary hover:text-white py-1 px-3 rounded-full text-xs'>{size.text}</span>
                  ))}
                </div>
              </div>

              <div className='lg:w-1/2'>
                <p className='text-xs text-neutral-500 font-semibold mb-1'>Color: <span className='text-neutral-600 uppercase'>black</span></p>
                <div className="flex items-center gap-2 flex-wrap">
                  {colors.map(color => (
                    <span key={color.id} className='capitalize bg-customGray hover:bg-secondary hover:text-white py-1 px-3 rounded-full text-xs'>{color.text}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full md:w-1/2 md:space-y-0 divide-y-2 divide-neutral-100 md:divide-y-0'>
          <div className="w-full flex flex-col gap-3 pt-4">
            <div className='pt-3 flex items-center justify-between gap-3'>
              <p className='text-sm font-semibold'>Product description</p>
              <ButtonNeutral
                onClick={handleProductDescriptionToggle}
                icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${productDescription ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
              />
            </div>
            {productDescription &&
            <div>
              <p className={`${moreDescription ? '' : 'line-clamp-3'} text-xs text-neutral-500 font-semibold`}>
                Wholesale and drop shipping are both welcomed.
                For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae optio aperiam debitis quasi illum eum deleniti facere aliquid ut!
              </p>

              <button onClick={handleMoreDescriptionToggle} className='text-start text-primary text-xs font-semibold'>{moreDescription ? 'Show less' : 'Read more'}</button>
            </div>
            }
          </div>

          <div className="w-full flex flex-col gap-3 pt-4">
            <div className='pt-3 flex items-center justify-between gap-3'>
              <p className='text-sm font-semibold'>About this vendor</p>
              <ButtonNeutral
                onClick={handleThisVendorToggle}
                icon1={<div className="relative size-5 rounded-full hover:bg-customGray"><Image src="/images/chevron_down.svg" sizes="100%" fill alt="Arrow Left" className={`transform ${thisVendor ? 'rotate-180' : ''} transition-all duration-300 ease-in-out rounded-full object-cover`} /></div>}
              />
            </div>
            {thisVendor &&
            <>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <div className="relative size-12 rounded-full hover:bg-customGray">
                  <Image src="/images/Avatar.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} />
                </div>
                <div className="flex flex-col gap-[.5px]">
                  <p className='text-sm font-semibold'>Gucci store</p>
                  <div className="flex items-center gap-[7px]">
                    <p className='text-neutral-500 text-xs'>Fashion</p>
                    <span className='size-1 bg-neutral-400 rounded-full'></span>
                    <span className="flex gap-[2px]">
                      <div className="relative size-4 rounded-full hover:bg-customGray">
                        <Image src="/images/star.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} />
                      </div>
                      <span className='text-neutral-500 text-xs'>5.4</span>
                    </span>
                    <span className='size-1 bg-neutral-400 rounded-full'></span>
                    <span className="flex gap-[2px]">
                      <div className="relative size-4 rounded-full hover:bg-customGray">
                        <Image src="/images/group.svg" sizes="100%" fill alt="Arrow Left" className={`rounded-full object-cover`} />
                      </div>
                      <span className='text-neutral-500 text-xs'>100k</span>
                    </span>
                  </div>
                </div>
              </div>
              <p className='text-sm font-semibold text-primary'>Follow</p>
            </div>

            <div>
              <p className='text-xs text-neutral-500 font-semibold mb-1 line-clamp-2'>Vendor description: You can track your parcel on the following website using your tracking number: www.17track.net/en (Copied to the browser to open)</p>
              <div className="flex items-center gap-2 flex-wrap mt-3">
                {collections.map(collection => (
                  <span key={collection.id} className='bg-customGray hover:bg-secondary hover:text-white py-1 px-3 rounded-full text-xs'>{collection.text}</span>
                ))}
              </div>
            </div>
            </>
            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default ProductPreview;