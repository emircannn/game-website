import Avatar from "../UI & Layout/Avatar"
import Steam from '@/public/icons/steam.svg'
import Ea from '@/public/icons/ea.svg'
import Ubisoft from '@/public/icons/ubisoft.svg'
import Youtube from '@/public/icons/yt.svg'
import Twitch from '@/public/icons/twitch.svg'
import Discord from '@/public/icons/dc.svg'

const UserInfo = ({
    username
}) => {

    const Platform = ({icon, disabeled, color='#120e47'}) => {
        return (
            <button 
            style={{backgroundColor: color}}
            className="w-[45px] h-[45px] rounded-full flex items-center justify-center disabled:opacity-50 overflow-hidden"
            disabled={disabeled}>
                {icon}
            </button>
        )
    }

  return (
    <div className="flex flex-col items-center justify-center my-4">
        <Avatar
            height="120"
            width="120"
            backgroundColor='#120e47'
        />

        <div className="m-[15px] flex flex-col items-center">
            <h1 className="text-white font-semibold text-[32px]">
            {username}
            </h1>

            <span className="text-secondary-light text-[13px]">
                16 Mart 2023 Tarihinden Beri Üye
            </span>

            <div className="mt-[15px] flex items-center gap-[10px] justify-center flex-wrap">
                <Platform
                    icon={<Steam/>}
                    disabeled={true}
                />
                <Platform
                    icon={<Ubisoft width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={true}
                />
                <Platform
                    icon={<Ea width='22' heiht='22' fill='#eb5f5f'/>}
                    disabeled={true}
                    color="#992828"
                />
                <Platform
                    icon={<Youtube width='22' heiht='22'/>}
                    disabeled={true}
                    color="#992828"
                />
                <Platform
                    icon={<Twitch width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={true}
                />
                <Platform
                    icon={<Discord width='24' heiht='24' fill='#b6b6f8'/>}
                    disabeled={true}
                />
            </div>
        </div>
    </div>
  )
}

export default UserInfo