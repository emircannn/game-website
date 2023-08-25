import Image from "next/image"
import { AiFillHeart } from "react-icons/ai"

const LastFavorited = () => {
  return (
    <div className="col-span-4 768:col-span-2 w-full h-[350px] rounded-xl bg-primary-light flex items-center justify-center flex-col">
        <AiFillHeart size={30} className="text-graident-dark"/>

        <span className="text-[18px] text-white mt-[10px]">İstek Listesine Son Eklenen</span>

        <div className="w-[80%] h-[2px] rounded-full bg-secondary-light my-[20px]"/>

        <div className="w-[250px] flex flex-col gap-[10px]">
            <div className="w-full h-[150px] rounded-xl overflow-hidden relative">
                <Image src='/images/fifa.jpg' alt="" fill quality={100} className="object-cover"/>
            </div>

            <div className="flex items-center justify-between gap-[10px] text-white text-[13px] font-medium">
                <span className="line-clamp-1">Fifa 23</span>
                <span>180.00 TL</span>
            </div>
        </div>
    </div>
  )
}

export default LastFavorited