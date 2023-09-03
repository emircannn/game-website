/* eslint-disable react-hooks/rules-of-hooks */

import StrategyBox from '@/components/GameBox/StrategyBox'
import GameSkeleton from '@/components/MaterialUI/GameSkeleton'
import Footer from '@/components/UI & Layout/Footer'
import Header from '@/components/UI & Layout/Header'
import Pagination from '@/components/UI & Layout/Pagination'
import axios from 'axios'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const index = () => {

  const [data, setData] = useState()
  const [page, setPage] = useState()
  const [totalPages, setTotalPages] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
          setLoading(true)
          let queryParams = '';
        if (page) queryParams += `page=${page}`;
          const res = await axios.get(`${process.env.REQUEST}category/getAll?${queryParams}`)
          setData(res?.data?.data)
          setTotalPages(res?.data?.totalPages)
          setLoading(false)
      } catch (error) {
          setLoading(false)
          toast.error(error?.response?.data?.message.split(':')[1] || error?.response?.data?.message, {position: 'bottom-right'})
      }
    }

    getData()
  }, [page])

  return (
    <Fragment>
        <Head>
            <title>Kategoriler</title>
        </Head>

        <Header/>
       <div className='container py-[20px]'>
        <h2 className='heading'>Kategoriler</h2>

          <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2 768:min-h-[520px]'>
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

          <div className='flex justify-center mt-[10px] min-h-[30px]'>
            {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
          </div>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default index