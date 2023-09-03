import Link from 'next/link'
import Horizontal from '../GameBox/Horizontal'
import GameSkeleton from '../MaterialUI/GameSkeleton'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const PreOrders = () => {

  const [data, setData] = useState()
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
          setLoading(true)
          const res = await axios.get(`${process.env.REQUEST}game/getAll?preOrder=true`)
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
    <div>
        <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Ön Sipariş</h2>

        {totalPages > 1 && <Link href='/ara?preOrder=true'>
        <button className='button'>Hepsini Gör</button>
        </Link>}
        </div>

        <div className='mt-[30px] grid gap-[10px] grid-cols-1 1140:gap-[30px] 1140:grid-cols-3 450:grid-cols-2 relative 768:min-h-[520px]'>
        {!loading ? 
          data?.length > 0 ?
            data?.map((item,i) => (
                <Horizontal
                  key={i}
                  data={item}
                />
              )) : 
              <div className='text-white text-[16px] w-full absolute top-0 left-0 flex items-center justify-center h-full'>
                Henüz ön siparişe açık oyun yok takipte kalın :)
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
    </div>
  )
}

export default PreOrders