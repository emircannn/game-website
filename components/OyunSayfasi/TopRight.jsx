import Tick from '../../public/icons/tick.svg'
import Tag from '../../public/icons/tag.svg'
import Cart from '../../public/icons/basket.svg'
import tailwindConfig from "@/tailwind.config"
import { AiFillHeart } from "react-icons/ai"
import { calculateRemainingTime, formatter } from '@/utils/helper'
import { useEffect, useState } from 'react'
import { IoMdClose } from 'react-icons/io'

const TopRight = ({
    data
}) => {
    const discountDateDB = data?.discountDate ? data?.discountDate : null;
    const preOrderDate = data?.preOrderDate ? data?.preOrderDate : null;
    const [remainingDate, setRemainingDate] = useState(calculateRemainingTime(discountDateDB));
    const [preOrder, setPreOrder] = useState(calculateRemainingTime(preOrderDate));
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
    useEffect(() => {
    if(preOrderDate) {
        const timerInterval = setInterval(() => {
            const newRemainingDate = calculateRemainingTime(preOrderDate);
            setPreOrder(newRemainingDate);
            }, 1000);
        
            return () => {
                clearInterval(timerInterval);
            };
    }
    }, [preOrderDate]);

  return (
    <div className="p-[20px] glass-light 768:rounded-xl flex-col gap-[25px] relative flex items-center justify-between">
                <div className="flex flex-col gap-[20px]">
                <h1 className="text-white text-center text-[23px] font-semibold">{data?.name}</h1>

                    {data.stok > 0 ? 
                        <div className="px-[20px] py-[15px] bg-black/40  rounded-full flex items-center justify-center text-white">
                        <Tick width='17' height='17' fill={tailwindConfig.theme.extend.colors.success}/>
                        <span className="text-[13px] ml-[4px]">Stokta Var</span>

                        <span className="text-[13px] mx-[8px]">|</span>

                        <span className="text-[13px]">{data.stok > 10 ? '+10 Adet' : `${data.stok} Adet`}</span>
                    </div>
                    :
                    <div className="px-[20px] py-[15px] bg-black/40  rounded-full flex items-center justify-center text-white">
                        <IoMdClose size={18} className="text-graident-dark"/>
                        <span className="text-[13px] ml-[4px]">Stokta Yok</span>
                    </div>}

                    <div className="px-[20px] py-[10px] text-white bg-primary-lighter/75 align-cntr rounded-full">
                        <span>Platform: {data.platform}</span>
                    </div>
                </div>

                <div className="flex w-full flex-col gap-[20px]">
                <div className="flex items-center justify-center gap-[10px] text-white">
                    {data.discountRate &&<Tag height='15' width='15' fill={tailwindConfig.theme.extend.colors.success}/>}
                    {data.discountPrice && <span className="text-[14px] line-through">{formatter.format(data.price)}</span>}
                    {data.discountRate && <span className="text-[14px] text-success font-medium">-${data.discountRate}%</span>}
                    <span className="768:text-[32px] text-[22px] font-medium">{data.discountPrice ? formatter.format(data.discountPrice) : formatter.format(data.price)}</span>
                </div>

                {data?.discountDate && (new Date(data?.discountDate) > new Date()) ?
                <span className="font-semibold text-[13px] text-white text-center">
                    İndirim Süresi: {remainingDate}
                </span> : null}
                {data?.preOrderDate && (new Date(data?.preOrderDate) > new Date()) ?
                <span className="font-semibold text-[13px] text-white text-center">
                    Yayına kalan süre: {preOrder}
                </span> : null}

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