import { getWishlist } from "@/utils/Requests"
import Horizontal from "../GameBox/Horizontal"
import Loading from "../UI & Layout/Loading"
import { useEffect, useState } from "react"


const Wishlist = ({
    user,
}) => {
    const [game, setGame] = useState()

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
                />
            ))}
        </div>
        :
        <div className="text-[16px] text-white font-semibold  mt-[40px] flex items-center justify-center">
            Kullanıcının istek listesi boş
        </div>
    }
        </>
  )
}

export default Wishlist