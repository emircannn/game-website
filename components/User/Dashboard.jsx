import axios from "axios"
import Cup from "../Profil/Dashboard/Cup"
import LastFavorited from "../Profil/Dashboard/LastFavorited"
import LastGame from "../Profil/Dashboard/LastGame"
import Overview from "../Profil/Dashboard/Overview"
import Loading from "../UI & Layout/Loading"
import { useEffect, useState } from "react"


const Dashboard = ({
    user,
    currentUser=false
}) => {

  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      if(user) {
        await axios.get(`${process.env.REQUEST}auth/dashboard?id=${user?._id}`).then((data) => {
            setData(data?.data?.data);
          })
      }
    }

    getData()
  }, [user])

  if(!data) {
    return <Loading/>
  }
  
  return (
    <div className="mt-[30px] grid grid-cols-4 gap-[10px] 768:gap-[30px]">
        <Overview
          user={user}
        />
        <Cup
          user={user}
        />

        <LastFavorited
          game={data?.lastWishlist}
          currentUser={currentUser}
        />
        <LastGame
          game={data?.lastGame}
          currentUser={currentUser}
        />
    </div>
  )
}

export default Dashboard