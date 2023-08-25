import { Select } from "antd"
import Image from "next/image"
import { BsFillTrashFill } from "react-icons/bs"

const CartItem = () => {

    const options = [1,2,3,4,5,6,7,8,9, 10]

  return (
    <div className="w-full p-[15px] rounded-xl bg-primary-lighter flex items-center gap-[10px] 450:gap-[20px]">
        <div className="w-[100px] 768:w-[200px] aspect-[2/1] relative rounded-xl overflow-hidden shrink-0">
            <Image src='/images/fifa.jpg' alt="" fill className="object-cover" quality={100}/>
        </div>

        <div className="flex justify-between h-full w-full items-center">
            <div className="flex flex-col h-full justify-between">
                <p className="text-[14px] font-semibold text-white line-clamp-1">Fifa 23</p>
                <p className="text-[14px] text-secondary line-clamp-1">Steam</p>
                
                <div className="flex items-center gap-[15px]">
                    <button>
                        <BsFillTrashFill size={18} className="text-secondary duration-300 hover:text-white"/>
                    </button>

                    <button className="text-secondary duration-300 hover:text-white text-[13px]">
                        İstek Listesine Ekle
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-[10px] max-450:flex-col">
                <span className="text-white font-semibold text-[14px]">
                    80.00 Tl
                </span>

                <Select
                    size="medium"
                    defaultValue={1}
                    style={{width: '65px' }}
                    options={options.map((option) => ({ label: option, value: option }))}
                />
            </div>
        </div>
    </div>
  )
}

export default CartItem