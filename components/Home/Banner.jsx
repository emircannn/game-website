/* eslint-disable react/no-unescaped-entities */
import { calculateRemainingTime, formatter } from '@/utils/helper';
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Banner = ({src, title, discount, price, height, discountPrice, discountDate, preOrderDate, href, data}) => {

  const discountDateDB = discountDate ? discountDate : null;
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

    const preOrderDateDb = preOrderDate ? preOrderDate : null;
    const [preOrder, setPreOrder] = useState(calculateRemainingTime(preOrderDate));
    useEffect(() => {
    if(preOrderDateDb) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(preOrderDateDb);
            setPreOrder(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [preOrderDateDb]);

  return (
    <Link href={href ? `/oyun/${href}` : '/'}>
    <div className='clip-polygon 1336:h-[550px] 450:h-[400px] h-[300px] overflow-hidden w-full'>
        <div className='w-full h-full relative'>
        {src && <Image alt='' src={src} fill quality={100} className='w-full h-full object-cover'/>}
        <span className='absolute top-0 left-0 h-full w-full bg-black/40'></span>

        {data && <div className='absolute top-0 left-0 h-full w-full 768:w-1/2 flex flex-col items-center justify-center'>
            <div>
            <h3 className='text-white flex flex-col font-semibold text-[22px] max-450:text-center 1140:text-[40px] uppercase'>{title}</h3>
            <div className='flex items-center gap-[10px]'>
             {discount && <span className='text-white font-semibold text-[12px] bg-gradient-to-r from-graident 
             to-secondary 450:px-[8px] 450:py-[4px] px-[4px] py-[2px] rounded-md'>-{discount}%</span>}
              {price && <span className={`text-white font-semibold text-[14px] 1140:text-[20px] ${discountPrice && 'line-through'}`}>{price}</span>}
              {discountPrice && <span className={`text-white font-medium text-[14px] 1140:text-[20px]`}>{formatter.format(discountPrice)}</span>}
            </div>
              {discountDateDB && <div className='text-white text-[14px] font-semibold mt-[5px]'>
                İndirim Süresi: {remainingDate}
              </div>}

              {preOrderDate &&
              <div className='flex items-center gap-[10px] mt-[8px]'>
                <span className='text-[12px] px-[4px] py-[2px] border border-secondary rounded text-secondary font-semibold'>
                  Ön Sipariş
                </span>

                <span className='text-[12px] font-semibold text-secondary'>
                  {preOrder}
                </span>
              </div>}
            </div>
        </div>}
        </div>
    </div>
    </Link>
  )
}

export default Banner