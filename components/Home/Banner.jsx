/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

const Banner = ({src, title, discount, price}) => {
  return (
    <div className='clip-polygon 1336:h-[550px] 450:h-[400px] h-[300px] overflow-hidden w-full'>
        <div className='w-full h-full relative'>
        <Image alt='' src={src} width={2500} height={1250} className='w-full h-full object-cover'/>
        <span className='absolute top-0 left-0 h-full w-full bg-black/30'></span>
        <div className='absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center'>
            <div>
            <h3 className='text-white flex flex-col font-semibold text-[20px] 1140:text-[40px] uppercase'>{title}</h3>
            <div className='flex items-center gap-[10px]'>
              <span className='text-white font-semibold text-[12px] bg-gradient-to-r from-graident to-secondary 450:px-[8px] 450:py-[4px] px-[4px] py-[2px] rounded-md'>-{discount}%</span>
              <span className='text-white font-semibold text-[14px] 1140:text-[20px]'>{price} ₺</span>
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Banner