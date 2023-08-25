import Avatar from "@/components/UI & Layout/Avatar"
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai"

const RequestProfil = () => {
  return (
    <div className="w-full p-[10px] rounded-xl bg-primary-lighter h-[250px] flex items-center justify-center flex-col gap-[20px]">
        <div className="flex flex-col justify-center items-center gap-[10px]">
        <Avatar
            width="80"
            height="80"
            backgroundColor='#09071d'
        />

        <p className="text-[16px] font-semibold text-white">
            emircanny
        </p>
        </div>

        <div className="flex items-center gap-[10px] ">
            <button 
            className="w-[50px] group h-[35px] rounded-xl border-2 border-secondary justify-center 
            hover:border-red-500 hover:bg-red-500 duration-300 flex items-center">
                <AiOutlineClose size={24} className="text-secondary duration-300 group-hover:text-white"/>
            </button>
            <button 
            className="w-[50px] group h-[35px] rounded-xl border-2 border-secondary justify-center 
            hover:border-green-500 hover:bg-green-500 duration-300 flex items-center">
                <AiOutlineCheck size={24} className="text-secondary duration-300 group-hover:text-white"/>
            </button>
        </div>
    </div>
  )
}

export default RequestProfil