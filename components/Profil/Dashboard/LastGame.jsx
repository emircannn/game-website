import Image from 'next/image'
import Link from 'next/link'
import { FaGamepad } from 'react-icons/fa'

const LastGame = ({
  game
}) => {
  return (
    <div className="col-span-4 768:col-span-2 w-full h-[350px] rounded-xl bg-primary-lighter flex items-center justify-center flex-col">
        <FaGamepad size={30} className="text-secondary-light"/>

        <span className="text-[18px] text-white mt-[10px]">Son Alınan Oyun</span>

        <div className="w-[80%] h-[2px] rounded-full bg-secondary-light my-[20px]"/>

        {game ? 
          <Link href={`/oyun/${game?.seo}`}>
        <div className="w-[250px] flex flex-col gap-[10px]">
            <div className="w-full h-[150px] rounded-xl overflow-hidden relative">
                <Image src={game?.coverImage} alt="" priority fill quality={100} className="object-cover"/>
            </div>

            <div className="flex items-center justify-between gap-[10px] text-white text-[13px] font-medium">
                <span className="line-clamp-1">{game?.name}</span>
                <div className="flex items-center gap-[6px]">
                <span>{dicountPrice}</span>
                <span className={`${dicountPrice && 'line-through opacity-90'}`}>{price}</span>
                </div>
            </div>
        </div>
        </Link>
        :
        <div className='text-[13px] h-[179.5px] text-white font-medium flex items-center justify-center'>
            Henüz bir oyuna sahip değilsiniz.
        </div>
        }
    </div>
  )
}

export default LastGame