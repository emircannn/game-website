import Image from 'next/image'
import { useRouter } from 'next/router'

const StrategyBox = () => {
  
  const {push} = useRouter()

  return (
    <div onClick={() => push('/kategori')} className=' w-full group duration-300 cursor-pointer overflow-y-clip relative flex items-end group rounded-xl'>
        <Image alt='' src='/images/strategy.webp' width={1500} height={750} className='w-full h-[90%] rounded-xl object-cover duration-500'/>
        <span className='absolute left-0 bottom-0 right-0 w-full h-[90%] bg-black/50 rounded-xl'></span>
        <span className='absolute left-0 bottom-0 w-[40%] h-[90%] flex items-center text-white font-semibold uppercase 1140:text-[20px] max-450:text-[13px] justify-center'> Strateji</span>
        <Image alt='' src='/images/suleyman.png' width={1500} height={750} className='w-[60%] h-[100%] group-hover:scale-105 duration-300 object-contain absolute flex items-end bottom-0 right-0'/>
    </div>
  )
}

export default StrategyBox