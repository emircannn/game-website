import Image from "next/image"
import Like from '../../../../public/icons/like.svg'
import Dislike from '../../../../public/icons/dislike.svg'
import tailwindConfig from "@/tailwind.config"
import { BsTrash3Fill } from "react-icons/bs"

const RecentReviews = ({
    profile=false
}) => {

    const like = true

  return (
    <div className="bg-primary-light p-[30px] rounded-xl flex flex-col gap-[20px]">
        <div className="flex items-center gap-[10px]">
            <div className="min-w-[50px] max-w-[50px] h-[50px] rounded-xl border-2 border-transparent hover:border-graident-dark duration-300 overflow-hidden">
                <Image alt="" src='/images/user.jpg' width={200} height={200} className="w-full h-full object-cover"/>
            </div>

            {like === true ?
                    <div className="rounded-full bg-success/25 min-w-[50px] h-[50px] align-cntr">
                        <Like height='25' width='25' fill='#6DD432'/>
                    </div> : 
                
                    <div className="rounded-full bg-graident-dark/40 min-w-[50px] h-[50px] align-cntr">
                        <Dislike height='25' width='25' fill='#eb5f5f'/>
                    </div>
                }
        </div>

        <div className="h-[115px] overflow-hidden">
        <div className="h-full overflow-y-auto pr-[5px]">
                    <p className="text-secondary-light leading-6 tracking-wide text-[14px] font-light">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt ut id corporis inventore, dolores dignissimos enim. 
                        Minima mollitia cumque blanditiis quidem ad, illum aspernatur ex dolor aliquid corrupti rem, aliquam repudiandae in iste quo dignissimos distinctio. 
                        Tenetur fugiat rerum error, magni quibusdam, corporis perferendis vero alias totam perspiciatis magnam voluptatibus!
                    </p>
                </div>
        </div>

        <div className=" flex items-center justify-end">

                {profile ? 
                    <button className="flex items-center gap-[12px] text-secondary border-secondary
                    border px-[24px] py-[8px] text-[14px] rounded-full hover:bg-primary-dark duration-300">
                    Sil

                    <BsTrash3Fill className="text-secondary"/>
                    </button>
                :
                
                <div className="flex items-center gap-[10px]">
                    <button className="flex items-center gap-[8px] text-secondary border-secondary 
                    border px-[16px] py-[8px] text-[11px] rounded-full hover:bg-primary-dark duration-300">
                    <Like height='15' width='15' fill={tailwindConfig.theme.extend.colors.secondary}/>
                    2
                    </button>

                    <button className="flex items-center gap-[8px] text-secondary border-secondary 
                    border px-[16px] py-[8px] rounded-full hover:bg-primary-dark duration-300">
                    <Dislike height='15' width='15' fill={tailwindConfig.theme.extend.colors.secondary}/>
                    </button>
                </div>}
            </div>
    </div>
  )
}

export default RecentReviews