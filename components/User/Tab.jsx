import { UserContext } from "@/context/userContext"
import { useRouter } from "next/router"
import { useContext } from "react"
import { AiFillSetting } from "react-icons/ai"

const Tab = ({
    setTab,
    tab
}) => {

    const {asPath, push} = useRouter()
    const {user} = useContext(UserContext)

    const TabItems = ({title, index, icon}) => {
        return (
            <li 
            onClick={() => setTab(index)}
            className={`pb-[20px] font-medium text-[14px] cursor-pointer duration-300 no-underline flex items-center gap-[6px]
            ${tab === index ? 'border-b-2 text-secondary border-secondary' : 'text-white'}`}> 
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
                    index={0}
                />
                <TabItems
                    title='İstek Listesi'
                    index={1}
                />
                <TabItems
                    title='Kütüphane'
                    index={2}
                />
                <TabItems
                    title='Arkadaşlar'
                    index={3}
                />
                <TabItems
                    title='Değerlendirmeler'
                    index={4}
                />
            </ul>
        </div>

        <div className="w-full h-[2px] bg-secondary-light/50 rounded-full absolute bottom-0 left-0"/>
    </div>
  )
}

export default Tab