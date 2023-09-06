import Banner from "@/components/Degerlendirme/Banner"
import BestReviews from "@/components/OyunSayfasi/Reviews/components/BestReviews"
import RecentReviews from "@/components/OyunSayfasi/Reviews/components/RecentReviews"
import ReviewPopUp from "@/components/OyunSayfasi/Reviews/components/ReviewPopUp"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Pagination from "@/components/UI & Layout/Pagination"
import { getWithSeo } from "@/utils/Requests"
import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { IoIosArrowBack } from "react-icons/io"


const Reviews = () => {

    const {query} = useRouter()
    const {id} = query
    const {push} = useRouter()

    const [show, setShow] = useState(false)

    const [reviews, setReviews] = useState()
    const [page, setPage] = useState()
    const [totalPages, setTotalPages] = useState()
    const [images, setImages] = useState()

    useEffect(() => {
      if(id) {
        getWithSeo(id, setReviews, page, setTotalPages, setImages)
      }
    }, [id, page])

  return (
    <>
    <Head>
        <title>{images?.name} Değerlendirmeleri</title>
    </Head>
    <Header/>

        <Banner
          review={() => setShow(true)}
          bg={images?.bannerImage}
          thumb={images?.coverImage}
          back={() => push(`/oyun/${images?.seo}`)}
        />
    
      <main className="container min-h-[calc(100vh_-_324px)] 1336:mt-[550px] 450:mt-[350px] mt-[250px] pb-[50px]">
      <div className=' w-full h-full flex gap-[30px] flex-col'>
            <div className='grid grid-cols-2 gap-[20px] w-full max-768:hidden'>
                {reviews?.map((review, i) => (
                  <BestReviews
                    key={i}
                    data={review}
                  />
                ))}
            </div>

            <Link href={`/oyun/${images?.seo}`}>
            <button 
            className="768:hidden text-graident-dark text-[13px] text-start font-medium space-y-2 flex items-center">
            <IoIosArrowBack className="text-graident-dark"/>
              Oyun Sayfasına Geri Dön
            </button> 
            </Link>

            <div className='grid grid-cols-1 gap-[20px] w-full 768:hidden'>
                {reviews?.map((review, i) => (
                  <RecentReviews
                    key={i}
                    data={review}
                  />
                ))}
            </div>

            <div className='flex justify-center'>
              {totalPages > 1 && <Pagination siblingCount={5} totalPages={totalPages} onPageChange={setPage}/>}
            </div>
        </div>
      </main>
    <Footer/>

    {show && 
    <ReviewPopUp
    width='120'
    height='120'
    setShow={setShow} 
    show={show}
    game={images?._id}
    />}
    </>
  )
}

export default Reviews