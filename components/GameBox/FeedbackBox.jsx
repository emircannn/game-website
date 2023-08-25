import Image from "next/image"
import Like from '../../public/icons/like.svg'
import Dislike from '../../public/icons/dislike.svg'
import User from '../../public/icons/user.svg'
import Avatar from "../UI & Layout/Avatar"
import tailwindConfig from "@/tailwind.config"
import { useState } from "react"

const FeedbackBox = ({like, readMore}) => {

    const [read, setRead] = useState(false)

  return (
    <div className={`rounded-xl overflow-hidden bg-gradient-to-tl from-button via-primary-lighter ${like ? 'to-success' : 'to-graident-dark'}`}>
        <div className=' w-full cursor-pointer overflow-hidden relative group'>
            <Image alt='' src='/images/fifa.jpg' width={1500} height={750} className='w-full hover:scale-105 h-full object-cover group-hover:opacity-0 duration-500'/>
            <Image alt='' src='/images/deneme.jpg' width={1500} height={750} className='w-full hover:scale-105 h-full object-cover absolute opacity-0 group-hover:opacity-100 
            top-0 left-0 right-0 bottom-0 duration-500'/>
        </div>

        <div className="p-[20px] w-full">
            <div className="align-cntr w-full gap-[10px]">
                
                <div className="max-768:hidden">
                <Avatar
                width="60"
                height="60"
                backgroundColor={tailwindConfig.theme.extend.colors.primary}
                />
                </div>

                <div className="w-[40px] h-[40px] 768:hidden rounded-lg bg-primary border-2 border-transparent align-cntr hover:border-graident-dark duration-300">
                    <User width='15' height='15' fill='#8585f5'/>
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

            <p className={`${!read && 'line-clamp-4'} text-[12px] 768:text-[14px] text-white leading-6 mt-[20px]`}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid animi laudantium adipisci nobis minima, 
                ad rerum error corrupti magnam sequi laborum accusantium, praesentium omnis quis laboriosam quaerat reprehenderit a. 
                praesentium omnis quis laboriosam quaerat reprehenderit a.
            </p>

            {readMore && <button onClick={() => setRead(!read)} className="text-[13px] text-secondary font-medium">Devamını {read ? 'Gizle' : 'Gör'}</button>}
        </div>
    </div>
  )
}

export default FeedbackBox