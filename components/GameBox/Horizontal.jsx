import { calculateRemainingTime, formatter } from '@/utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Horizontal = ({
  wishlist,
  data
}) => {

  const price = formatter.format(data?.price)
  const discountPrice = data?.discountPrice ? formatter.format(data?.discountPrice) : null
  const preOrderDate = data?.preOrderDate ? data?.preOrderDate : null;
    const [preOrder, setPreOrder] = useState(calculateRemainingTime(preOrderDate));
    useEffect(() => {
    if(preOrderDate) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(preOrderDate);
            setPreOrder(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [preOrderDate]);

  return (
    <div className='flex w-full flex-col'>
        <div className='w-full h-[210px] hover:scale-105 duration-300 cursor-pointer relative group overflow-hidden rounded-xl hover:neon-blue'>
        <Link href={`/oyun/${data?.seo}`}>
            <Image alt={data?.name} src={data?.coverImage} fill quality={100} className='w-full h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt={data?.name} src={data?.bannerImage} fill quality={100} className='w-full h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>

            {data?.discountRate && <span className='absolute top-0 right-0 450:text-[12px] text-[10px] flex items-center justify-center font-semibold text-white bg-secondary px-[10px] py-[6px] discount-polygon'>
            -{data?.discountRate}%
            </span>}
        </Link>

            {wishlist && <button onClick={wishlist} className='absolute top-2 left-2 p-2 group bg-primary-lighter rounded-full duration-300 hover:bg-red-500'>
              <AiOutlineClose size={18} className='text-secondary duration-300 group-hover:rotate-180 group-hover:text-white'/>
            </button>}
        </div>

        <div className='flex items-center justify-between w-full text-[12px] 450:text-[14px] text-white font-medium mt-[10px] 450:mt-[15px]'>
          <h3>{data?.name}</h3>

          <div className="flex items-center gap-[6px]">
            <span>{discountPrice}</span>
            <span className={`${discountPrice && 'line-through opacity-90'}`}>{price}</span>
          </div>
        </div>

        {preOrderDate && (new Date(preOrderDate) > new Date()) ? <div className='flex items-center gap-[8px] mt-[4px]'>
          <span className='text-secondary text-[11px] font-semibold py-[2px] px-[4px] border border-secondary rounded'>
            Ön Sipariş
          </span>

          <span className='text-secondary text-[11px] font-semibold'>
            {preOrder}
          </span>
        </div>: null}
    </div>
  )
}

export default Horizontal