import { FcCollapse } from "react-icons/fc"
import RequestProfil from "./RequestProfil"
import { useState } from "react"
import { Collapse } from "@mui/material"
import Friend from "./Friend"

const FriendsPage = () => {

    const [requests, setRequests] = useState(false)
    const [friends, setFriends] = useState(true)

  return (
    <div className="my-[30px] flex flex-col gap-[20px] 768:gap-[40px]">
        <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
            <h4 className="text-[16px] 450:text-[22px] font-semibold text-white">
                İstekler (3)
            </h4>

            <button
            onClick={() => setRequests(!requests)}
            >
                <FcCollapse size={24} className={`${requests ? 'rotate-0' : 'rotate-180'} duration-300`}/>
            </button>
            </div>

            <Collapse in={requests} timeout='auto' unmountOnExit>
            <div className="grid grid-cols-2 450:grid-cols-3 768:grid-cols-4 gap-[10px] 768:gap-[20px] mt-[15px]">
                <RequestProfil/>
                <RequestProfil/>
                <RequestProfil/>
            </div>
            </Collapse>
        </div>

        <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
            <h4 className="text-[16px] 450:text-[22px] font-semibold text-white">
                Arkadaşlar (5)
            </h4>

            <button
            onClick={() => setFriends(!friends)}
            >
                <FcCollapse size={24} className={`${friends ? 'rotate-0' : 'rotate-180'} duration-300`}/>
            </button>
            </div>

            <Collapse in={friends} timeout='auto' unmountOnExit>
            <div className="grid grid-cols-2 450:grid-cols-3 768:grid-cols-4 gap-[10px] 768:gap-[20px] mt-[15px]">
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
                <Friend/>
            </div>
            </Collapse>
        </div>
    </div>
  )
}

export default FriendsPage