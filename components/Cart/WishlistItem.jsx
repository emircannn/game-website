import { addToCart, deleteToWishlist, getCart, getWishlist } from "@/utils/Requests"
import { formatter } from "@/utils/helper"
import Image from "next/image"
import Link from "next/link"
import { AiOutlineArrowUp } from "react-icons/ai"

const WishlistItem = ({
    data,
    user,
    cart
}) => {


    const isCart = cart?.game?.find((item) => item._id === data?._id)

  return (
    <Link href={`/oyun/${data?.seo}`}>
        <div className="flex items-center w-full justify-between">
        <div className="flex items-center h-full gap-[10px]">
            <div className="w-[130px] aspect-[2/1] rounded-xl overflow-hidden shrink-0 relative">
            <Image src={data?.coverImage} alt={data?.name} fill className="object-cover" quality={100}/>
            </div>

            <div className="h-[70%] flex justify-between flex-col">
                <p className="text-[13px] font-semibold text-white">
                    {data?.name}
                </p>
                <p className="text-[13px] text-secondary">
                    {data?.platform}
                </p>
                <p className="text-[13px] font-semibold text-white flex items-center gap-[10px]">
                    <span className={`${data?.discountPrice && 'line-through'}`}>{formatter.format(data?.price)}</span>
                    {data?.discountPrice &&<span>{formatter.format(data?.discountPrice)}</span>}
                </p>
            </div>
        </div>

        {!isCart &&<button 
        onClick={() => {addToCart(user?._id, data?._id), deleteToWishlist(user?._id, data?._id)}}
        className="text-[13px] text-secondary hover:text-white duration-300 flex items-center gap-[10px] group">
            Sepete Ekle
            <AiOutlineArrowUp size={18} className="duration-300 group-hover:-translate-y-2"/>
        </button>}
    </div>
    </Link>
  )
}

export default WishlistItem