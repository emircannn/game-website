import Image from "next/image"

import Like from '../../../../public/icons/like.svg'
import Dislike from '../../../../public/icons/dislike.svg'
import tailwindConfig from "@/tailwind.config"
import { BsTrash3Fill } from "react-icons/bs"
import { dislike, like } from "@/utils/Requests"
import { dateFormater } from "@/utils/helper"
import Link from "next/link"

const BestReviews = ({
    profile=false,
    data,
    user
}) => {

  return (
    <div className="p-[30px] bg-primary-lighter rounded-xl flex gap-[30px]">
        <div className="flex flex-col gap-[10px]">
            <Link href={`/kullanici/${data?.user?.username}`}>
            <div className="w-[70px] h-[70px] shrink-0 rounded-xl border-2 border-transparent hover:border-graident-dark duration-300 overflow-hidden">
                <Image alt={data?.user?.name} src={data?.user?.image ? data?.user?.image : '/images/user.jpg'} width={200} height={200} className="w-full h-full object-cover"/>
            </div>
            </Link>

            
            {data?.rate >= 3 ?
                <div className="rounded-full bg-success/25 min-w-[70px] h-[70px] align-cntr">
                    <Like height='25' width='25' fill='#6DD432'/>
                </div> 
                : 
                <div className="rounded-full bg-graident-dark/40 min-w-[70px] h-[70px] align-cntr">
                    <Dislike height='25' width='25' fill='#eb5f5f'/>
                </div>
            }
        </div>

        <div className="max-h-[405px] w-full flex flex-col justify-between">
            <div className="max-h-[320px] overflow-hidden w-full flex">
                <div className="h-full overflow-y-auto w-full">
                    <p className="text-secondary-light leading-6 tracking-wide text-[14px] font-light w-full">
                        {data?.review}
                    </p>
                </div>
            </div>

            <div className="pt-[20px] border-t border-secondary-light flex items-center justify-between">
                <span className="text-secondary-light text-[14px]">{dateFormater(data?.createAt)}</span>

                {
                    profile ?

                    <button className="flex items-center gap-[12px] text-secondary border-secondary
                    border px-[24px] py-[8px] text-[14px] rounded-full hover:bg-primary-dark duration-300">
                    Sil

                    <BsTrash3Fill className="text-secondary"/>
                    </button>

                    :
                    <div className="flex items-center gap-[10px]">
                    <button 
                    onClick={() => like(user._id, data._id)}
                    className="flex items-center gap-[8px] text-secondary border-secondary 
                    border px-[16px] py-[8px] text-[13px] rounded-full hover:bg-primary-dark duration-300">
                    <Like height='20' width='20' fill={tailwindConfig.theme.extend.colors.secondary}/>
                    {data?.like?.length}
                    </button>

                    <button 
                    onClick={() => dislike(user._id, data._id)}
                    className="flex items-center gap-[8px] text-secondary border-secondary 
                    border px-[16px] py-[8px] rounded-full hover:bg-primary-dark duration-300">
                    <Dislike height='20' width='20' fill={tailwindConfig.theme.extend.colors.secondary}/>
                    </button>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default BestReviews