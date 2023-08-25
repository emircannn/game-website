import Banner from "@/components/Degerlendirme/Banner"
import BestReviews from "@/components/OyunSayfasi/Reviews/components/BestReviews"
import RecentReviews from "@/components/OyunSayfasi/Reviews/components/RecentReviews"
import ReviewPopUp from "@/components/OyunSayfasi/Reviews/components/ReviewPopUp"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"


const Reviews = () => {

    const {query} = useRouter()
    const {id} = query

    const [show, setShow] = useState(false)

  return (
    <>
    <Head>
        <title>{id}</title>
    </Head>
    <Header/>

        <Banner
          review={() => setShow(true)}
        />
    
      <main className="container min-h-[calc(100vh_-_324px)] 1336:mt-[550px] 450:mt-[350px] mt-[250px] pb-[50px]">
      <div className=' w-full h-full flex gap-[30px] flex-col'>
            
            <div className='grid grid-cols-2 gap-[20px] w-full max-768:hidden'>
                <BestReviews/>
                <BestReviews/>
                <BestReviews/>
                <BestReviews/>
                <BestReviews/>
                <BestReviews/>
            </div>

            <button className="768:hidden text-graident-dark text-[13px] text-start font-medium space-y-2 flex items-center">
            <IoIosArrowBack className="text-graident-dark"/>
              Oyun Sayfasına Geri Dön
            </button> 

            <div className='grid grid-cols-1 gap-[20px] w-full 768:hidden'>
                <RecentReviews/>
                <RecentReviews/>
                <RecentReviews/>
                <RecentReviews/>
                <RecentReviews/>
                <RecentReviews/>
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
    />}
    </>
  )
}

export default Reviews