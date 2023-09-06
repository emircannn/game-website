import { useRouter } from "next/router"
import FeedbackBox from "../GameBox/FeedbackBox"
import ReviewSkeleton from "../MaterialUI/ReviewSkeleton"
import { useEffect, useState } from "react"
import { getReviews } from "@/utils/Requests"

const FeedBack = () => {

  const {push} = useRouter()
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()
  
  useEffect(() => {
    const limit = 4
    getReviews(setData,page,limit,setTotalPages)
  }, [page])
  

  return (
    <> 
        <div className='container align-btwn pt-[40px] pb-[30px]'>
        <h4 className='heading'>Değerlendirmeler</h4>
        <button onClick={() => push('/degerlendirmeler')} className='button'>Hepsini Gör</button>
        </div>

        <div className='grid grid-cols-4 max-1280:grid-cols-3 max-768:grid-cols-2 max-450:grid-cols-1 w-full px-[30px] pb-[30px] gap-[30px]'>
            { data ?
            data.length > 0 ?
              data?.map((item, i) => (
                <FeedbackBox 
                key={i}
                data={item}
                like={item.rate >= 3}/>
              )) :

              <div className="w-full flex items-center justify-center text-[14px] font-semibold">
                  Henüz değerlendirme yapılmadı...
              </div>

              :
              <>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              </>
            }
        </div>
    </>
  )
}

export default FeedBack