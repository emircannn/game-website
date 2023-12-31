import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/userContext'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import ReviewBox from './ReviewBox'
import Loading from '../UI & Layout/Loading'
import { useRouter } from 'next/router'

const Reviews = () => {

  const [data, setData] = useState()
  const {user} = useContext(UserContext)
  const {reload} = useRouter()

  useEffect(() => {
      if(user) {
        const getReview = async() => {
          try {
              const token = await localStorage.getItem('authToken');
              const res = await axios.get(`${process.env.REQUEST}review/getById?id=${user?._id}`, {
                  headers: {
                      Authorization: `Bearer ${token}`
                  }
                  })
                  setData(res?.data?.data)
          } catch (error) {
              toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
          }
      }

      getReview()
      }
  }, [user])

  const handleDeleteReview = async(id) => {
    try {
      const token = localStorage.getItem('authToken');
      const res = await axios.post(`${process.env.REQUEST}review/delete?id=${id}`,{}, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        })
        if(!res.data.error) {
          toast.success(res.data.message, {position: 'bottom-right'})
          reload()
      }
    } catch (error) {
      reload()
      toast.error(error?.response?.data?.message, {position: 'bottom-right'})
    }
  }

  if (!data) {
    return <Loading/>
  }

  return (
    <>
        {data?.length > 0 ?
        <div className='grid grid-cols-1 768:grid-cols-2 gap-[20px] w-full my-[30px]'>
            {data?.map((item, i) => (
              <ReviewBox
                key={i}
                data={item}
                handleDelete={() => handleDeleteReview(item._id)}
              />
            ))}
        </div>
        :
        <div className='min-h-[calc(100vh_-_668px)] flex items-center justify-center text-white text-[14px] font-semibold'>
              Henüz değerlendirme yapmadınız...
        </div>
        }
    </>
  )
}

export default Reviews