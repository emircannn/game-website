import { calculateRemainingTime, formatter } from '@/utils/helper';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const WeeklyBox = ({
    data
}) => {
    const discountDateDB = data?.discountDate ? data?.discountDate : null;
    const [remainingDate, setRemainingDate] = useState(calculateRemainingTime(discountDateDB));
    useEffect(() => {
    if(discountDateDB) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(discountDateDB);
            setRemainingDate(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [discountDateDB]);
  return (
    <div className='flex w-full flex-col overflow-hidden items-center'>
       <div className='min-w-full aspect-video duration-300 cursor-pointer relative group overflow-hidden rounded-t-xl '>
        <Link href={`/oyun/${data?.seo}`}>
            <Image alt='' src={data?.coverImage} fill quality={100} className='w-full hover:scale-105 h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt='' src={data?.bannerImage} fill quality={100} className='w-full hover:scale-105 h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>
            <span className='absolute top-0 right-0 450:text-[12px] text-[10px] flex items-center justify-center font-semibold text-white bg-secondary px-[10px] py-[6px] discount-polygon'>-{data?.discountRate}%</span>
        </Link>
        </div>

        <div className='flex items-center justify-center w-full h-[30px] 1140:h-[45px] bg-secondary rounded-b-xl  text-white font-medium '>
            <p className='text-[11px] 768:text-[14px] 1140:text-[16px]'>{remainingDate}</p>
        </div>

        <div className='mt-[14px] flex items-center w-full px-[5px] justify-between'>
            <h4 className='text-white font-medium text-[11px] 768:text-[14px] line-clamp-1'>{data?.name}</h4>
            <div className='text-white font-medium text-[11px] 768:text-[14px] flex items-center gap-[6px]'>
                <span className='line-through opacity-75'>{formatter.format(data?.price)}</span>
                {'>'}
                <span>{formatter.format(data?.discountPrice)}</span>
            </div>
        </div>
    </div>
  )
}

export default WeeklyBox