import Platform from "@/components/UI & Layout/Platform"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare2 } from "react-icons/fi"
import Tick from '../../../../public/icons/tick.svg'
import Cart from '../../../../public/icons/basket.svg'
import tailwindConfig from "@/tailwind.config"
import Button from "@/components/UI & Layout/Form/Button"

const Info = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
            <h1 className="text-[14px] font-semibold text-white tracking-wide">Fifa 23</h1>
            <div className="flex items-center gap-[8px] text-[24px] text-graident">
                <AiOutlineHeart className="hover:text-secondary duration-300"/>
                <FiShare2 className="hover:text-secondary duration-300"/>
            </div>
        </div>

        <div className="py-[10px] flex items-center justify-center gap-[10px] bg-primary-lighter rounded-lg text-[13px] text-white">
            <Platform
            platform='Origin'
            />

            <span>|</span>

            <div className="flex items-center gap-[8px]">
                <Tick fill={tailwindConfig.theme.extend.colors.success} width='18' height='18'/>
                <span>Stokta Var</span>
            </div>
        </div>

        <div className="flex items-center justify-center gap-[14px]">
            <span className="text-[14px] text-white line-through">159.90 TL</span>
            <span className="text-[18px] text-graident font-semibold">-25%</span>
            <span className="text-[18px] text-white">119.90 TL</span>
        </div>

        <div className="flex items-center gap-[10px]">
            <Button
            iconLeft={<Cart fill='#fff' width='20' height='20'/>}
            />
            <Button
            textSize="14px"
            title='Satın Al'
            wfull={true}
            />
        </div>
    </div>
  )
}

export default Info