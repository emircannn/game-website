import Image from "next/image"
import { AiOutlineArrowUp } from "react-icons/ai"

const WishlistItem = () => {
  return (
    <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-[10px]">
            <div className="w-[130px] aspect-[2/1] rounded-xl overflow-hidden shrink-0 relative">
            <Image src='/images/fifa.jpg' alt="" fill className="object-cover" quality={100}/>
            </div>

            <div className="h-full flex justify-between flex-col">
                <p className="text-[13px] font-semibold text-white">
                    Fifa 23
                </p>
                <p className="text-[13px] text-secondary">
                    Steam
                </p>
                <p className="text-[13px] font-semibold text-white">
                    80.00 TL
                </p>
            </div>
        </div>

        <button className="text-[13px] text-secondary hover:text-white duration-300 flex items-center gap-[10px] group">
            Sepete Ekle

            <AiOutlineArrowUp size={18} className="duration-300 group-hover:-translate-y-2"/>
        </button>
    </div>
  )
}

export default WishlistItem