import { addToWishlist, deleteToCart, getCart, getWishlist } from "@/utils/Requests"
import { formatter } from "@/utils/helper"
import Image from "next/image"
import Link from "next/link"
import { BsFillTrashFill } from "react-icons/bs"

const CartItem = ({
    data,
    user,
    wishlist
}) => {

    const isWishlist = wishlist?.find((item) => item._id === data?._id)

  return (
    <Link href={`/oyun/${data?.seo}`}>
        <div className="w-full p-[15px] rounded-xl h-full bg-primary-lighter flex items-center gap-[10px] 450:gap-[20px] hover:neon-blue duration-300">
        <div className="w-[100px] 768:w-[200px] aspect-[2/1] relative rounded-xl overflow-hidden shrink-0">
            <Image src={data?.coverImage} alt={data?.name} fill className="object-cover" quality={100}/>
        </div>

        <div className="flex justify-between h-full w-full items-center">
            <div className="flex flex-col h-full justify-between">
                <p className="text-[14px] font-semibold text-white line-clamp-1">{data?.name}</p>
                <p className="text-[14px] text-secondary line-clamp-1">{data?.platform}</p>
                
                <div className="flex items-center gap-[15px]">
                    <button
                    onClick={() => {deleteToCart(user?._id, data?._id)}}
                    >
                        <BsFillTrashFill size={18} className="text-secondary duration-300 hover:text-white"/>
                    </button>

                    {!isWishlist &&<button 
                    onClick={() => {deleteToCart(user?._id, data?._id),addToWishlist(user?._id, data?._id)}}
                    className="text-secondary duration-300 hover:text-white text-[13px]">
                        İstek Listesine Ekle
                    </button>}
                </div>
            </div>

            <div className="flex items-center gap-[10px] max-450:flex-col">
                <span className={`text-white font-semibold text-[14px] ${data?.discountPrice && 'line-through'}`}>
                   {formatter.format(data?.price)}
                </span>
                {data?.discountPrice && 
                <span className={`text-white font-semibold text-[14px]`}>
                   {formatter.format(data?.discountPrice)}
                </span>}
            </div>
        </div>
    </div>
    </Link>
  )
}

export default CartItem