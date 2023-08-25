import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WeeklyBox = () => {
  return (
    <div className='flex w-full flex-col overflow-hidden items-center'>
        <Link href='/oyun'>
        <div className=' w-full duration-300 cursor-pointer relative group overflow-hidden rounded-t-xl'>
            <Image alt='' src='/images/fifa.jpg' width={1500} height={750} className='w-full hover:scale-105 h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt='' src='/images/deneme.jpg' width={1500} height={750} className='w-full hover:scale-105 h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>
            <span className='absolute top-0 right-0 450:text-[12px] text-[10px] flex items-center justify-center font-semibold text-white bg-secondary px-[10px] py-[6px] discount-polygon'>-25%</span>
        </div>

        <div className='flex items-center justify-center w-full h-[30px] 1140:h-[45px] bg-secondary rounded-b-xl  text-white font-medium'>
            <p className='text-[14px] 1140:text-[18px]'>2 Gün Kaldı</p>
        </div>
        </Link>

        <div className='mt-[14px] flex items-center w-full px-[5px] justify-between'>
            <h4 className='text-white font-medium text-[14px]'>Fifa 23</h4>
            <div className='text-white font-medium text-[14px] flex items-center gap-[6px]'>
                <span className='line-through opacity-75'>159.90 ₺</span>
                {'>'}
                <span>119.90</span>
            </div>
        </div>
    </div>
  )
}

export default WeeklyBox