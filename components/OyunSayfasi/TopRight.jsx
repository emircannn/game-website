import Tick from '../../public/icons/tick.svg'
import Tag from '../../public/icons/tag.svg'
import Cart from '../../public/icons/basket.svg'
import tailwindConfig from "@/tailwind.config"
import { AiFillHeart } from "react-icons/ai"

const TopRight = () => {
  return (
    <div className="p-[20px] glass-light 768:rounded-xl flex-col gap-[25px] relative flex items-center justify-between">
                <div className="flex flex-col gap-[20px]">
                <h1 className="text-white text-center text-[23px] font-semibold">Fifa 23</h1>

                    <div className="px-[20px] py-[15px] bg-black/40  rounded-full flex items-center justify-center text-white">
                        <Tick width='17' height='17' fill={tailwindConfig.theme.extend.colors.success}/>
                        <span className="text-[13px] ml-[4px]">Stokta Var</span>

                        <span className="text-[13px] mx-[8px]">|</span>

                        <span className="text-[13px]">+10 Adet</span>
                    </div>

                    <div className="px-[20px] py-[10px] text-white bg-primary-lighter/75 align-cntr rounded-full">
                        <span>Platform: Steam</span>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-[20px]">
                <div className="flex items-center justify-center gap-[10px] text-white">
                    <Tag height='15' width='15' fill={tailwindConfig.theme.extend.colors.success}/>
                    <span className="text-[14px] line-through">159.90 TL</span>
                    <span className="text-[14px] text-success font-medium">-25%</span>
                    <span className="768:text-[32px] text-[22px] font-medium">119.90 TL</span>
                </div>

                <div className="flex justify-center items-center gap-[15px]">
                    <button className="h-[55px] min-w-[55px] bg-rose-500 rounded-lg align-cntr hover:bg-secondary duration-300">
                        <Cart fill='#fff' width='25' height='25'/>
                    </button>
                    <button className="h-[55px] w-full bg-rose-500 text-white font-semibold rounded-lg align-cntr hover:bg-secondary duration-300">
                        Satın Al
                    </button>
                </div>
                </div>

                <div className="absolute top-4 right-4 text-rose-500 hover:text-secondary duration-300 cursor-pointer">
                <AiFillHeart size={30}/>
                </div>
        </div>
  )
}

export default TopRight