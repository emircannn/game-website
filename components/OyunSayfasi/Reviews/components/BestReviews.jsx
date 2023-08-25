import Image from "next/image"

import Like from '../../../../public/icons/like.svg'
import Dislike from '../../../../public/icons/dislike.svg'
import tailwindConfig from "@/tailwind.config"
import { BsTrash3Fill } from "react-icons/bs"

const BestReviews = ({
    profile=false,
}) => {

    const like = true

  return (
    <div className="p-[30px] bg-primary-lighter rounded-xl flex gap-[30px]">
        <div className="flex flex-col gap-[10px]">
            <div className="min-w-[70px] h-[70px] rounded-xl border-2 border-transparent hover:border-graident-dark duration-300 overflow-hidden">
                <Image alt="" src='/images/user.jpg' width={200} height={200} className="w-full h-full object-cover"/>
            </div>

            
            {like === true ?
                    <div className="rounded-full bg-success/25 min-w-[70px] h-[70px] align-cntr">
                        <Like height='25' width='25' fill='#6DD432'/>
                    </div> : 
                
                    <div className="rounded-full bg-graident-dark/40 min-w-[70px] h-[70px] align-cntr">
                        <Dislike height='25' width='25' fill='#eb5f5f'/>
                    </div>
                }
           
        </div>

        <div className="h-[405px] flex flex-col justify-between">
            <div className="h-[320px] overflow-hidden">
                <div className="h-full overflow-y-auto">
                    <p className="text-secondary-light leading-6 tracking-wide text-[14px] font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut id corporis inventore, dolores dignissimos enim. 
                        Minima mollitia cumque blanditiis quidem ad, illum aspernatur ex dolor aliquid corrupti rem, aliquam repudiandae in iste quo dignissimos distinctio. 
                        Tenetur fugiat rerum error, magni quibusdam, corporis perferendis vero alias totam perspiciatis magnam voluptatibus!
                    </p>
                </div>
            </div>

            <div className="pt-[20px] border-t border-secondary-light flex items-center justify-between">
                <span className="text-secondary-light text-[14px]">31 Mart 2023</span>

                {
                    profile ?

                    <button className="flex items-center gap-[12px] text-secondary border-secondary
                    border px-[24px] py-[8px] text-[14px] rounded-full hover:bg-primary-dark duration-300">
                    Sil

                    <BsTrash3Fill className="text-secondary"/>
                    </button>

                    :
                    <div className="flex items-center gap-[10px]">
                    <button className="flex items-center gap-[8px] text-secondary border-secondary 
                    border px-[16px] py-[8px] text-[13px] rounded-full hover:bg-primary-dark duration-300">
                    <Like height='20' width='20' fill={tailwindConfig.theme.extend.colors.secondary}/>
                    2
                    </button>

                    <button className="flex items-center gap-[8px] text-secondary border-secondary 
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