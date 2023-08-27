import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs"
import Button from "../UI & Layout/Form/Button"
import { useRouter } from "next/router"

const Summary = () => {

    const {push} = useRouter()

  return (
    <div className="flex flex-col gap-[20px] w-full max-w-[400px]">
        <h5 className="text-[16px] font-medium text-white ">
        Tutar
        </h5>

        <div className="w-full rounded-xl p-[25px] bg-primary-lighter gap-[20px] flex flex-col justify-between">
            <div className="w-full flex flex-col gap-[10px]">
                <div className="flex items-center justify-between text-[14px] text-secondary">
                    <span>Toplam</span>
                    <span>0 TL</span>
                </div>
                <div className="flex items-center justify-between text-[14px] text-secondary">
                    <span>İndirim</span>
                    <span>0 TL</span>
                </div>
                <div className="flex items-center justify-between text-[14px] text-white font-semibold">
                    <span>Ara Toplam</span>
                    <span className="text-[18px] mt-[10px]">0 TL</span>
                </div>

                <Button
                    height='h-[55px]'
                    title='Ödeme Yap'
                    iconRight={<BsArrowRightShort size={24} className="text-white"/>}
                />
            </div>

            <div className="flex items-center w-full justify-center gap-[10px]">
                <div className="w-full h-[1px] bg-secondary"/>
                <span className="text-secondary shrink-0">ve ya</span>
                <div className="w-full h-[1px] bg-secondary"/>
            </div>

            <button 
            onClick={() => push('/')}
            className="text-secondary flex items-center gap-[8px] text-[14px] justify-center group hover:text-white duration-300">
                <BsArrowLeftShort size={25} className="duration-300 group-hover:-translate-x-2"/>
                Alışverişe Devam Et
            </button>   
        </div>
    </div>
  )
}

export default Summary