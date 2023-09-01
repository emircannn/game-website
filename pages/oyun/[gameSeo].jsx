/* eslint-disable react-hooks/rules-of-hooks */
import Hero from "@/components/Home/Hero"
import AboutGame from "@/components/OyunSayfasi/AboutGame"
import Configurations from "@/components/OyunSayfasi/Configurations"
import Description from "@/components/OyunSayfasi/Description"
import Responsive from "@/components/OyunSayfasi/Responsive"
import Reviews from "@/components/OyunSayfasi/Reviews/Reviews"
import Top from "@/components/OyunSayfasi/Top"
import Visual from "@/components/OyunSayfasi/Visual"
import Footer from "@/components/UI & Layout/Footer"
import GameWrapper from "@/components/UI & Layout/GameWrapper"
import Header from "@/components/UI & Layout/Header"
import Loading from "@/components/UI & Layout/Loading"
import { seoDesc } from "@/utils/helper"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react"
import { toast } from "react-hot-toast"

const index = () => {

  const [showMore, setShowMore] = useState(false)
  const {query} = useRouter()
  const {gameSeo} = query
  const [data,setData] = useState()
  useEffect(() => {
    if (gameSeo) {
      const getData = async () => {
        try {
          const res = await axios.get(`${process.env.REQUEST}game/getBySeo?seo=${gameSeo}`)
          setData(res?.data?.data)
        } catch (error) {
          toast.error(error?.response?.message?.split(':')[1] || error?.response?.message, {position: 'bottom-right'})
        }
      }
      getData()
    }
  }, [gameSeo])

  if(!data) {
    return <Loading/>
  }
  return (
    <Fragment>
      <Head>
        <title>{data?.name}</title>
        <meta name="description" content={seoDesc(data?.desc)} />
      </Head>
    <Header/>
    <div className="max-768:hidden">
      <Hero src={data?.bannerImage}/>
      <main className="container">

      <Top
        data={data}
      />

      <AboutGame 
      setShowMore={setShowMore} 
      data={data}
      marginTop={true}
      routeAbout='#about'
      routeReview='#review'/>

      <Visual
        data={data}
      />

      <Description 
      setShowMore={setShowMore} 
      showMore={showMore}
      routeAbout='about'
      data={data}
      />

      <Configurations
        data={data}
      />

      <Reviews
      data={data}
      routeReview='review'
      />

      <GameWrapper
      title='Benzer Oyunlar'
      showAll={false}
      continueBtn={true}
      data={data?.similarGames}
      />

      {data?.similarGames <= 0 &&
      <p className="text-center text-white font-semibold text-[14px] pb-[20px]">
        Henüz benzer oyun eklenmedi
      </p>}

      </main>
    </div>
    <Responsive 
    setShowMore={setShowMore} 
    showMore={showMore}
    data={data}
    />
    <Footer/>
    </Fragment>
  )
}

export default index