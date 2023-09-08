import Image from "next/image"
import Like from '../../public/icons/like.svg'
import Dislike from '../../public/icons/dislike.svg'
import Avatar from "../UI & Layout/Avatar"
import tailwindConfig from "@/tailwind.config"
import { useState } from "react"
import Link from "next/link"

const FeedbackBox = ({like, readMore, data}) => {

    const [read, setRead] = useState(false)

  return (
    <div className={`rounded-xl overflow-hidden bg-gradient-to-tl from-button via-primary-lighter ${like ? 'to-success' : 'to-graident-dark'}`}>
        <div className='aspect-video w-full cursor-pointer overflow-hidden relative group'>
        <Link href={`/oyun/${data?.game?.seo}`}>
            <Image alt={data?.game?.seo} src={data?.game?.coverImage} width={1500} height={750} className='w-full hover:scale-105 h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt={data?.game?.seo} src={data?.game?.bannerImage} width={1500} height={750} className='w-full hover:scale-105 h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>
        </Link>
        </div>

        <div className="p-[20px] w-full">
            <div className="align-cntr w-full gap-[10px]">
                
                <div className="max-768:hidden">
                <Link href={`/kullanici/${data?.user?.username}`}>
                <Avatar
                width="60"
                height="60"
                src={data?.user?.image}
                backgroundColor={tailwindConfig.theme.extend.colors.primary}
                />
                </Link>
                </div>

                <div className="768:hidden">
                    <Link href={`/kullanici/${data?.user?.username}`}>
                    <Avatar
                    width="40"
                    height="40"
                    iconHeight="20"
                    iconWidth="20"
                    src={data?.user?.image}
                    backgroundColor={tailwindConfig.theme.extend.colors.primary}
                    />
                    </Link>
                </div>

                {like === true ?
                    <div className="rounded-full bg-success/25 768:p-[15px] p-[8px] align-cntr">
                        <Like height='25' width='25' fill='#6DD432'/>
                    </div> : 
                
                    <div className="rounded-full bg-graident-dark/40 768:p-[15px] p-[8px] align-cntr">
                        <Dislike height='25' width='25' fill='#eb5f5f'/>
                    </div>
                }
            </div>

            <p className={`${!read && 'line-clamp-4'} text-[12px] 768:text-[14px] text-white leading-6 mt-[20px] text-center`}>
                {data?.review}
            </p>

            {readMore && <button onClick={() => setRead(!read)} className="text-[13px] text-secondary font-medium">Devamını {read ? 'Gizle' : 'Gör'}</button>}
        </div>
    </div>
  )
}

export default FeedbackBox