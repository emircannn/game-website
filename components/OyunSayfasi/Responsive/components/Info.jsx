import Platform from "@/components/UI & Layout/Platform"
import { AiOutlineHeart } from "react-icons/ai"
import { FiShare2 } from "react-icons/fi"
import Tick from '../../../../public/icons/tick.svg'
import Cart from '../../../../public/icons/basket.svg'
import tailwindConfig from "@/tailwind.config"
import Button from "@/components/UI & Layout/Form/Button"
import { IoMdClose } from "react-icons/io"
import { calculateRemainingTime, formatter } from "@/utils/helper"
import { useEffect, useState } from "react"

const Info = ({
    data
}) => {
    const discountDateDB = data?.discountDate ? data?.discountDate : null;
    const [remainingDate, setRemainingDate] = useState(calculateRemainingTime(discountDateDB));
    useEffect(() => {
    if(discountDateDB) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(discountDateDB);
            setRemainingDate(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [discountDateDB]);
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="flex items-center justify-between">
            <h1 className="text-[14px] font-semibold text-white tracking-wide">{data?.name}</h1>
            <div className="flex items-center gap-[8px] text-[24px] text-graident">
                <AiOutlineHeart className="hover:text-secondary duration-300"/>
                <FiShare2 className="hover:text-secondary duration-300"/>
            </div>
        </div>

        <div className="py-[10px] flex items-center justify-center gap-[10px] bg-primary-lighter rounded-lg text-[13px] text-white">
            <Platform
            platform={data?.platform}
            />

            <span>|</span>

            <div className="flex items-center gap-[8px]">
                {data?.stok ? 
                <Tick fill={tailwindConfig.theme.extend.colors.success} width='18' height='18'/> 
                :
                <IoMdClose size={18} className="text-graident-dark"/>}
                {data?.stok ? 
                <span>Stokta Var</span>
                :
                <span>Stokta Yok</span>}
                
            </div>
        </div>

        <div className="flex items-center justify-center gap-[14px]">
            {data?.discountPrice && <span className="text-[14px] text-white line-through">{formatter.format(data?.price)}</span>}
            {data?.discountRate && <span className="text-[18px] text-graident font-semibold">-{data?.discountRate}%</span>}
            <span className="text-[18px] text-white">{data?.discountPrice ? formatter.format(data?.discountPrice) :formatter.format(data?.price)}</span>
        </div>
            {data?.discountDate && (new Date(data?.discountDate) > new Date()) ?
                <span className="font-semibold text-[13px] text-white text-center">
                    İndirim Süresi: {remainingDate}
                </span> : null}

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