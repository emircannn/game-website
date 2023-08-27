import { UserContext } from '@/context/userContext';
import Cup from './Cup';
import LastFavorited from './LastFavorited';
import LastGame from './LastGame';
import Overview from './Overview';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '@/components/UI & Layout/Loading';

const Dashboard = () => {
  const {user} = useContext(UserContext)

  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      await axios.get(`${process.env.REQUEST}auth/dashboard?id=${user?._id}`).then((data) => {
        setData(data?.data?.data);
      })
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
        />
        <LastGame
          game={data?.lastGame}
        />
    </div>
  )
}

export default Dashboard