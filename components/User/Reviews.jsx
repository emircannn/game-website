import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Loading from "../UI & Layout/Loading";
import ReviewBox from "../Profil/ReviewBox";


const Reviews = ({
    user,
    currentUser
}) => {

  const [data, setData] = useState()

  useEffect(() => {
      if(user) {
        const getReview = async() => {
          try {
              const token = localStorage.getItem('authToken');
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
                user={currentUser}
              />
            ))}
        </div>
        :
        <div className='min-h-[calc(100vh_-_668px)] flex items-center justify-center text-white text-[14px] font-semibold'>
            Kullanıcı henüz değerlenirme yapmadı...
        </div>
        }
    </>
  )
}

export default Reviews