import { useContext, useEffect, useState } from "react"
import Horizontal from "../GameBox/Horizontal"
import { UserContext } from "@/context/userContext"
import axios from "axios"
import { useRouter } from "next/router"
import { toast } from "react-hot-toast"
import Loading from "../UI & Layout/Loading"

const Wishlist = () => {
    const [game, setGame] = useState()
    const {user} = useContext(UserContext)
    const {reload} = useRouter()

    useEffect(() => {
        const getWishlist = async () => {
            const {data} = await axios.get(`${process.env.REQUEST}user/getWishlist?username=${user?.username}`)
            setGame(data?.data)
        }

        getWishlist()
    }, [user])

    const deleteWishlist = async (id) => {
        try {
            const token = await localStorage.getItem('authToken')
            const res = await axios.post(`${process.env.REQUEST}user/deleteWishlist?id=${user?._id}`, {wishlist: id},{
                headers: {
                    Authorization: `Bearer ${token}`
                }
                })
            if(!res.data.error) {
                toast.success(res.data.message, {position: 'bottom-right'})
                reload()
            }
        } catch (error) {
            toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
        }
    }

    if(!game) {
        return <Loading/>
    }
    
    return (
        <>
        {game?.wishlist?.length > 0 ?
        <div className="my-[30px] grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[10px] 450:gap-[20px]">
            {game.wishlist.map((data, i) => (
                <Horizontal
                key={i}
                wishlist={() => deleteWishlist(data._id)}
                data={data}
                />
            ))}
        </div>
        :
        <div className="text-[16px] text-white font-semibold  mt-[40px] flex items-center justify-center">
            İstek listeniz boş...
        </div>
    }
        </>
  )
}

export default Wishlist