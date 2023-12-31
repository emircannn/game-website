import { UserContext } from "@/context/userContext"
import { useRouter } from "next/router"
import { useContext } from "react"
import { AiFillSetting } from "react-icons/ai"

const Tab = ({
    username
}) => {

    const {asPath, push} = useRouter()
    const {user} = useContext(UserContext)

    const TabItems = ({title, pathname, icon}) => {
        return (
            <li 
            onClick={() => push(pathname)}
            className={`pb-[20px] font-medium text-[14px] cursor-pointer duration-300 no-underline flex items-center gap-[6px]
            ${asPath === pathname ? 'border-b-2 text-secondary border-secondary' : 'text-white'}`}> 
                {icon}
                {title}
            </li>
        )
    }

  return (
    <div className="mt-[60px] flex flex-col relative">
        <div className="flex items-center justify-between flex-wrap">
            <ul className="flex items-center gap-[20px] flex-wrap">
                <TabItems
                    title='Dashboard'
                    pathname={`/profil/${user?.username}`}
                />
                <TabItems
                    title='Siparişlerim'
                    pathname={`/profil/${user?.username}/siparislerim`}
                />
                <TabItems
                    title='İstek Listesi'
                    pathname={`/profil/${user?.username}/isteklistesi`}
                />
                <TabItems
                    title='Kütüphane'
                    pathname={`/profil/${user?.username}/kutuphane`}
                />
                <TabItems
                    title='Arkadaşlar'
                    pathname={`/profil/${user?.username}/arkadaslar`}
                />
                <TabItems
                    title='Değerlendirmeler'
                    pathname={`/profil/${user?.username}/degerlendirmeler`}
                />
            </ul>

                <ul>
                <TabItems
                    title='Ayarlar'
                    pathname={`/profil/${user?.username}/ayarlar`}
                    icon={<AiFillSetting size={22} className={`${asPath === `/profil/${user?.username}/ayarlar` ? 'text-secondary' : 'text-white'}`}/>}
                />
                </ul>
        </div>

        <div className="w-full h-[2px] bg-secondary-light/50 rounded-full absolute bottom-0 left-0"/>
    </div>
  )
}

export default Tab