import Image from 'next/image'
import User from '../../public/icons/user.svg'
import { useContext, useState } from 'react'
import OutsideClickHandler from 'react-outside-click-handler'
import Link from 'next/link'
import { AiOutlineLogout } from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/router'
import { UserContext } from '@/context/userContext'

const ProfilButton = ({
    user
}) => {

    const [open, setOpen] = useState(false)

    const {push} = useRouter()
    const {setUser} = useContext(UserContext)

    const list = [
        {name: 'Profil', link: `/profil/${user?.username}`},
        {name: 'Siparişlerim', link: `/profil/${user?.username}/siparislerim`},
        {name: <>İstek Listesi 
        {user?.wishlist?.length > 0 && <span className='text-[13px] w-[18px] h-[18px] flex items-start justify-center shrink-0 rounded-full bg-graident-dark'>
        {user?.wishlist?.length}</span>}
        </>, 
        link: `/profil/${user?.username}/isteklistesi`},
        {name: 'Kütüphane', link: `/profil/${user?.username}/kutuphane`},
        {name: <>Arkadaşlar 
            {user?.friendRequests?.length > 0 && <span className='text-[13px] w-[18px] h-[18px] flex items-start justify-center shrink-0 rounded-full bg-graident-dark'>
            {user?.friendRequests?.length}</span>}
            </>, 
            link: `/profil/${user?.username}/arkadaslar`},
        {name: 'Ayarlar', link: `/profil/${user?.username}/ayarlar`},
    ]

    const handleLogout = async() => {
        localStorage.removeItem('authToken')
        setUser(null)
        toast.success('Çıkış yapıldı.', {position: 'bottom-right'})
        return push('/')
    };   

  return (
    <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
    <div className='relative'>
    <button onClick={() => setOpen(!open)} className='768:w-[50px] aspect-square w-[38px] relative overflow-hidden 
    flex items-center justify-center bg-primary-light hover:border-graident-dark border-2 border-transparent duration-300 rounded-xl'>
        {user.image ? 
        <Image alt='' src={user.image} className='object-cover' fill quality={100}/> 
        :
        <User width='22' height='22' fill='#b6b6f8'/>}
        </button>

        {open && <ul className='w-[200px] absolute glass-light rounded-xl right-0 top-[105%] z-50 flex flex-col p-[10px] gap-[5px]'>
            {list.map((item,i) => (
            <Link key={i} href={item.link}>
            <li className='text-[13px] font-semibold text-white hover:bg-secondary duration-300 cursor-pointer rounded-xl px-[10px] py-[5px] flex items-center gap-[6px]'>
            {item.name}
            </li>
            </Link>
            ))}

            <div className='h-[1px] rounded-full w-full bg-secondary'/>

            <li 
            onClick={() => handleLogout()}
            className='text-[13px] font-semibold text-white hover:bg-secondary duration-300 cursor-pointer rounded-xl px-[10px] py-[5px] flex items-center justify-between gap-[6px]'>
            Çıkış Yap
            <AiOutlineLogout className='text-white' size={16}/>
            </li>
        </ul>}
    </div>
    </OutsideClickHandler>
  )
}

export default ProfilButton