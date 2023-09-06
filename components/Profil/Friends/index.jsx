import { FcCollapse } from "react-icons/fc"
import RequestProfil from "./RequestProfil"
import { useState } from "react"
import { Collapse } from "@mui/material"
import Friend from "./Friend"

const FriendsPage = ({
    friendsList,
    requestList,
    user
}) => {

    const [requests, setRequests] = useState(false)
    const [friends, setFriends] = useState(true)

  return (
    <div className="my-[30px] flex flex-col gap-[20px] 768:gap-[40px]">
        {requestList && 
        <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
            <h4 className="text-[16px] 450:text-[22px] font-semibold text-white">
                İstekler ({requestList?.friendRequests?.length})
            </h4>

            <button
            onClick={() => setRequests(!requests)}
            >
                <FcCollapse size={24} className={`${requests ? 'rotate-0' : 'rotate-180'} duration-300`}/>
            </button>
            </div>

            <Collapse in={requests} timeout='auto' unmountOnExit>
            <div className="grid grid-cols-2 450:grid-cols-3 768:grid-cols-4 gap-[10px] 768:gap-[20px] mt-[15px] relative">
                {requestList?.friendRequests?.length > 0 ? 
                requestList?.friendRequests?.map((friend, i) => (
                    <RequestProfil
                        data={friend}
                        key={i}
                        user={user}
                    />
                )): 
                <div className="text-white font-semibold text-[14px] absolute w-full top-4 left-0 flex items-center justify-center">
                    Liste Boş
                </div>
                }
            </div>
            </Collapse>
        </div>}

        <div className="flex flex-col gap-[10px]">
            <div className="flex items-center justify-between">
            <h4 className="text-[16px] 450:text-[22px] font-semibold text-white">
                Arkadaşlar ({friendsList?.friends?.length})
            </h4>

            <button
            onClick={() => setFriends(!friends)}
            >
                <FcCollapse size={24} className={`${friends ? 'rotate-0' : 'rotate-180'} duration-300`}/>
            </button>
            </div>

            <Collapse in={friends} timeout='auto' unmountOnExit>
            <div className="grid grid-cols-2 450:grid-cols-3 768:grid-cols-4 gap-[10px] 768:gap-[20px] mt-[15px] relative">
                {friendsList?.friends.length > 0 ?
                friendsList?.friends?.map((friend, i) => (
                    <Friend
                        data={friend}
                        key={i}
                        user={user}
                    />
                )): 
                <div className="text-white font-semibold text-[14px] absolute w-full top-4 left-0 flex items-center justify-center">
                    Liste Boş
                </div>
                }
            </div>
            </Collapse>
        </div>
    </div>
  )
}

export default FriendsPage