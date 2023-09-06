/* eslint-disable react-hooks/rules-of-hooks */
import FeedbackBox from "@/components/GameBox/FeedbackBox"
import ReviewSkeleton from "@/components/MaterialUI/ReviewSkeleton"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Pagination from "@/components/UI & Layout/Pagination"
import { getReviews } from "@/utils/Requests"
import Head from "next/head"
import { useEffect, useState } from "react"

const index = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState()

  useEffect(() => {
    getReviews(setData,page,6,setTotalPages)
  }, [page])
  
  
  return (
    <>
    <Head>
        <title>Değerlendirmeler</title>
    </Head>
    <Header/>
      <main className="container min-h-[calc(100vh_-_324px)]">
        <h2 className="heading mb-[30px]">Tüm Değerlendirmeler</h2>
        <div className="w-full grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[20px] relative">
          {data ? 
          data?.length > 0 ?
          data.map((review, i) => (
            <FeedbackBox
            like={true}
            readMore={true}
            key={i}
            data={review}
            />
          )) :

          <div className="absolute w-full top-2 left-0 text-[14px] font-semibold text-white">
            Henüz değerlendirme yapılmadı...
          </div>
            :
            <>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
              <ReviewSkeleton/>
            </>
          }
        </div>

        <div className='flex justify-center mt-[20px]'>
          {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
      </div>
      </main>
    <Footer/>
    </>
  )
}

export default index