import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose } from 'react-icons/ai'

const Horizontal = ({
  wishlist = false
}) => {
  return (
    <div className='flex w-full gap-[10px] 450:gap-[15px] flex-col items-center'>
        <Link href='/oyun'>
        <div className=' w-full hover:scale-105 duration-300 cursor-pointer relative group overflow-hidden rounded-xl'>
            <Image alt='' src='/images/fifa.jpg' width={1500} height={750} className='w-full h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt='' src='/images/deneme.jpg' width={1500} height={750} className='w-full h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>
            <span className='absolute top-0 right-0 450:text-[12px] text-[10px] flex items-center justify-center font-semibold text-white bg-secondary px-[10px] py-[6px] discount-polygon'>-25%</span>

            {wishlist && <button className='absolute top-2 left-2 p-2 group bg-primary-lighter rounded-full duration-300 hover:bg-red-500'>
              <AiOutlineClose size={18} className='text-secondary duration-300 group-hover:rotate-180 group-hover:text-white'/>
            </button>}
        </div>
        </Link>

        <div className='flex items-center justify-between w-full text-[12px] 450:text-[14px] text-white font-medium'>
        <h3>Fifa 23</h3>
        <span>119.90 ₺</span>
        </div>
    </div>
  )
}

export default Horizontal