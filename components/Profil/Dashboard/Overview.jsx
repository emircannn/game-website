import { AiOutlineDashboard } from "react-icons/ai"

const Overview = ({
    user
}) => {
  return (
    <div className="col-span-4 450:col-span-3 768:col-span-3 w-full h-[250px] rounded-xl bg-primary-dark flex items-center justify-center flex-col gap-[20px]">
            <AiOutlineDashboard size={40} className="text-secondary"/>

            <span className="text-[13px] 1336:text-[18px] text-white">Özet</span>

            <div className=" w-[65%] h-[2px] rounded-full bg-secondary-light"/>

            <div className="max-w-[65%] grid grid-cols-2 w-full 768:flex items-center justify-around">
                <div className="flex flex-col items-center">
                    <span className="1336:text-[28px] text-[18px] text-white">{user?.friends?.length}</span>
                    <span className="1336:text-[16px] text-[13px] text-secondary-light">Arkadaşlar</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="1336:text-[28px] text-[18px] text-white">{user?.reviews?.length}</span>
                    <span className="1336:text-[16px] text-[13px] text-secondary-light">Değerlendirmeler</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="1336:text-[28px] text-[18px] text-white">{user?.wishlist?.length}</span>
                    <span className="1336:text-[16px] text-[13px] text-secondary-light">İstek Listesi</span>
                </div>
                <div className="flex flex-col items-center">
                    <span className="1336:text-[28px] text-[18px] text-white">{user?.library?.length}</span>
                    <span className="1336:text-[16px] text-[13px] text-secondary-light">Oyunlar</span>
                </div>
            </div>
        </div>
  )
}

export default Overview