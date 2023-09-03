/* eslint-disable react-hooks/rules-of-hooks */
import WeeklyBox from '@/components/GameBox/WeeklyBox'
import GameSkeleton from '@/components/MaterialUI/GameSkeleton'
import Footer from '@/components/UI & Layout/Footer'
import Header from '@/components/UI & Layout/Header'
import Pagination from '@/components/UI & Layout/Pagination'
import axios from 'axios'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

const index = () => {

    const [data, setData] = useState()
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
    const getData = async () => {
      try {
            let queryParams = '';
            if (page) queryParams += `page=${page}`;
            setLoading(true)
            const res = await axios.get(`${process.env.REQUEST}game/getAll?weeklyDiscount=true&${queryParams}`)
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
    <>
        <Head>
            <title>Haftalık Fırsatlar</title>
        </Head>

        <Header/>
        
        <div className='container py-[20px] min-h-[calc(100vh_-_270px)] flex flex-col justify-between'>
        <div className='flex flex-col'>
        <h2 className='heading'>Haftalık Fırsatlar</h2>

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
        </div>

        <div className='flex justify-center mt-[20px] 768:mt-[30px]'>
            {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
        </div>
        </div>
        <Footer/>
    </>
  )
}

export default index