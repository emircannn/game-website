import React, { useEffect, useState } from 'react'
import Horizontal from '../GameBox/Horizontal'
import GameSkeleton from '../MaterialUI/GameSkeleton'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import Pagination from './Pagination'

const SearchCont = ({
  searchInput
}) => {

  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false)

  console.log(data)

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`${process.env.REQUEST}game/search?page=${page}&search=${searchInput}`)
        setData(res?.data?.data)
        setTotalPages(res?.data?.totalPages)
        setLoading(false)
      } catch (error) {
        setLoading(false)
        toast.error(error?.response?.message?.split(':')[1] || error?.response?.message, {position: 'bottom-right'})
      }
    }

    getData()
  }, [searchInput, page])
  

  return (
    <div className='fixed w-full z-40 search h-screen top-0 left-0 right-0'>
         <div className='container overflow-y-auto'>
         <div className='mt-[150px] grid-cols-1 grid gap-[10px] 1140:gap-[30px] 1140:grid-cols-3 450:grid-cols-2'>
            {
              loading ?
              <>
              <GameSkeleton/>
              <GameSkeleton/>
              <GameSkeleton/>
              <GameSkeleton/>
              <GameSkeleton/>
              <GameSkeleton/>
              </> :
                data?.length > 0 ? 
                data?.map((game, i) => (
                  <Horizontal
                    key={i}
                    data={game}
                  />
                )) :
                <div>

                </div>
            }
        </div>

          <div className='flex justify-center mt-[20px]'>
            {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
          </div>
        </div>
    </div>
  )
}

export default SearchCont