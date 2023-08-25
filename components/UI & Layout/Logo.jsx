import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <div className='450:w-[120px] max-450:h-[50px] z-10'>
        <Link href='/'>
            {/* <Image alt='' src='/images/logo.png' width={500} height={500} className='w-full h-full object-contain'/> */}
            <h1 className="text-white font-bold text-lg 450:text-2xl 768:text-4xl">Logo</h1>
        </Link>
        </div>
  )
}

export default Logo