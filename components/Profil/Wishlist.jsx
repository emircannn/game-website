import { useContext, useEffect, useState } from "react"
import Horizontal from "../GameBox/Horizontal"
import { UserContext } from "@/context/userContext"
import Loading from "../UI & Layout/Loading"
import { deleteToWishlist, getWishlist } from "@/utils/Requests"

const Wishlist = () => {
    const [game, setGame] = useState()
    const {user} = useContext(UserContext)

    useEffect(() => {
        if(user) {
            getWishlist(setGame, user)
        }
    }, [user])

    if(!game) {
        return <Loading/>
    }
    
    return (
        <>
        {game?.length > 0 ?
        <div className="my-[30px] grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[10px] 450:gap-[20px]">
            {game.map((data, i) => (
                <Horizontal
                key={i}
                data={data}
                wishlist={() => deleteToWishlist(user?._id, data?._id)}
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