import Link from "next/link"
import Avatar from "../UI & Layout/Avatar"
import Steam from '@/public/icons/steam.svg'
import Ea from '@/public/icons/ea.svg'
import Ubisoft from '@/public/icons/ubisoft.svg'
import Youtube from '@/public/icons/yt.svg'
import Twitch from '@/public/icons/twitch.svg'
import Discord from '@/public/icons/dc.svg'
import AddFriend from '@/public/icons/addFriend.svg'
import DeleteFriend from '@/public/icons/deleteFriend.svg'
import { dateFormater } from "@/utils/helper"
import { addFriend, deleteFriend } from "@/utils/Requests"

const UserInfo = ({
    user,
    currentUser
}) => {

    const Platform = ({icon, disabeled, color='#120e47', link}) => {
        return (
            <>
            {link ? 
            <Link href={link}>
                <button 
            style={{backgroundColor: color}}
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center disabled:opacity-50 overflow-hidden"
            disabled={disabeled}>
                {icon}
            </button>
            </Link>: 
            <button 
            style={{backgroundColor: color}}
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center disabled:opacity-50 overflow-hidden"
            disabled={disabeled}>
                {icon}
            </button>}
            </>
        )
    }

    const date = dateFormater(user?.createdAt)

  return (
    <div className="flex flex-col items-center justify-center my-4">
        <Avatar
            height="120"
            width="120"
            backgroundColor='#120e47'
            src={user?.image}
        />

        <div className="m-[15px] flex flex-col items-center">
            {currentUser?.friends?.includes(user?._id) &&
            <span className="px-[6px] py-[2px] rounded-full bg-secondary text-white text-[12px] font-semibold neon-blue mb-[4px]">
                Arkadaşınız
            </span>
            }
            <div className="flex items-center gap-[10px]">
            <h1 className="text-white font-semibold text-[32px]">
            {user?.username}
            </h1>

            {!currentUser?.friends?.includes(user?._id) ?
            <button 
            onClick={() => addFriend(currentUser, user?._id)}
            className="p-[8px] rounded-full bg-primary-lighter flex items-center justify-center hover:neon-blue duration-300">
                <AddFriend fill='#8585f5' width='20' height='20'/>
            </button> : 
            <button 
            onClick={() => deleteFriend(currentUser, user?._id)}
            className="p-[8px] rounded-full bg-primary-lighter flex items-center justify-center hover:neon-blue duration-300">
                <DeleteFriend fill='#8585f5' width='20' height='20'/>
            </button>}
            </div>

            <span className="text-secondary-light text-[13px]">
                {date} Tarihinden Beri Üye
            </span>

            <div className="mt-[15px] flex items-center gap-[10px] justify-center flex-wrap">
                <Platform
                    icon={<Steam/>}
                    disabeled={user?.steamLink !== null ? false : true}
                    link={user?.steamLink}
                />
                <Platform
                    icon={<Ubisoft width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={user?.ubisoftLink !== null ? false : true}
                    link={user?.ubisoftLink}
                />
                <Platform
                    icon={<Ea width='22' heiht='22' fill='#eb5f5f'/>}
                    disabeled={user?.eaLink !== null ? false : true}
                    link={user?.eaLink}
                    color="#992828"
                />
                <Platform
                    icon={<Youtube width='22' heiht='22'/>}
                    disabeled={user?.youtubeLink !== null ? false : true}
                    link={user?.youtubeLink}
                    color="#992828"
                />
                <Platform
                    icon={<Twitch width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={user?.twitchLink !== null ? false : true}
                    link={user?.twitchLink}
                />
                <Platform
                    icon={<Discord width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={user?.discordLink !== null ? false : true}
                    link={user?.discordLink}
                />
            </div>
        </div>
    </div>
  )
}

export default UserInfo