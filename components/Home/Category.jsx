import React, { useEffect, useState } from 'react'
import StrategyBox from '../GameBox/StrategyBox'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import GameSkeleton from '../MaterialUI/GameSkeleton'

const Category = () => {

  const [data, setData] = useState()
  const [page, setPage] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
          setLoading(true)
          const res = await axios.get(`${process.env.REQUEST}category/getAll`)
          setData(res?.data?.data)
          setPage(res?.data?.totalPages)
          setLoading(false)
      } catch (error) {
          setLoading(false)
          toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
      }
    }

    getData()
  }, [])

  return (
    <section className='w-full bg-gradient-to-bl from-primary-light via-section to-primary mt-[30px]'>
       <div className='container py-[20px]'>
       <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Kategoriler</h2>

        {page > 1 && <button className='button'>Hepsini Gör</button>}
        </div>

        <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2 768:min-h-[520px] relative'>
        {!loading ? 
          data?.length > 0 ?
            data?.map((item,i) => (
                <StrategyBox
                  key={i}
                  data={item}
                />
              )) : 
              <div className='text-white text-[16px] w-full absolute top-0 left-0 flex items-center justify-center h-full'>
                Henüz kategori eklenmedi :(
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
    </section>
  )
}

export default Category