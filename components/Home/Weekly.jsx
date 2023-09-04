import axios from 'axios'
import WeeklyBox from '../GameBox/WeeklyBox'
import { toast } from 'react-hot-toast'
import GameSkeleton from '../MaterialUI/GameSkeleton'
import { useEffect, useState } from 'react'
import Link from 'next/link'

const Weekly = () => {

  const [data, setData] = useState()
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
          setLoading(true)
          const res = await axios.get(`${process.env.REQUEST}game/getAll?weeklyDiscount=true`)
          setData(res?.data?.data)
          setTotalPages(res?.data?.totalPages)
          setLoading(false)
      } catch (error) {
          setLoading(false)
          toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
      }
    }

    getData()
  }, [])

  return (
    <>
        <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Haftalık Fırsatlar</h2>

        {totalPages > 1 && 
        <Link href='/haftalik_firsatlar'>
          <button className='button'>Hepsini Gör</button>
        </Link>}
        </div>

        <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2 relative'>
        {!loading ? 
          data?.length > 0 ?
            data?.map((item,i) => (
                <WeeklyBox
                  key={i}
                  data={item}
                />
              )) : 
              <div className='text-white text-[16px] w-full absolute top-0 left-0 flex items-center justify-center h-full'>
                Henüz haftalık indirim yok takipte kalın :)
              </div>
              : 
              <>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
              </>}
        </div>
    </>
  )
}

export default Weekly