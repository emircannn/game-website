import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/UI & Layout/Header'
import Hero from '@/components/Home/Hero'
import Trust from '@/components/Home/Trust'
import PreOrders from '@/components/Home/PreOrders'
import Banner from '@/components/Home/Banner'
import Category from '@/components/Home/Category'
import Weekly from '@/components/Home/Weekly'
import Footer from '@/components/UI & Layout/Footer'
import FeedBack from '@/components/Degerlendirme/FeedBack'
import GameWrapper from '@/components/UI & Layout/GameWrapper'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '@/context/userContext'
import { getGames } from '@/utils/Requests'
import { toast } from 'react-hot-toast'
import axios from 'axios'
import { formatter } from '@/utils/helper'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {setUser} = useContext(UserContext)
  const [firstBanner, setFirstBanner] = useState()
  const [secondBanner, setSecondBanner] = useState()

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
        setUser(null)
    }
  }, [setUser])

  const [gameData, setGameData] = useState()
  
  useEffect(() => {
    getGames(setGameData)
  }, [])

  useEffect(() => {
    const getData = async () => {
        try {
          const res = await axios.get(`${process.env.REQUEST}admin/getFirstBanner`)
          setFirstBanner(res?.data?.data?.firstBanner)
        } catch (error) {
          toast.error(error?.response?.message?.split(':')[1] || error?.response?.message, {position: 'bottom-right'})
        }
    }
    getData()
  }, [])
  useEffect(() => {
    const getData = async () => {
        try {
          const res = await axios.get(`${process.env.REQUEST}admin/getSecondBanner`)
          setSecondBanner(res?.data?.data?.secondBanner)
        } catch (error) {
          toast.error(error?.response?.message?.split(':')[1] || error?.response?.message, {position: 'bottom-right'})
        }
    }
    getData()
  }, [])

  return (
    <>
      <Head>
        <title>Game Web Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
          <Header/>
          <Hero 
          src={firstBanner?.bannerImage} 
          discount={firstBanner?.discountRate} 
          title={firstBanner?.name} 
          price={formatter.format(firstBanner?.price)}
          discountPrice={firstBanner?.discountPrice}
          discountDate={firstBanner?.discountDate}
          preOrderDate={firstBanner?.preOrderDate}
          href={firstBanner?.seo}
          data={firstBanner}
          />
          <main>
          <section className='container 1336:mt-[460px] 450:mt-[320px] mt-[230px]'>
            <GameWrapper
            title={'Tüm Oyunlar'}
            showAll
            href='/ara'
            data={gameData}
            />
          </section>

          <div className='my-[30px]'>
            <Trust/>
          </div>

          <section className='container'>
            <PreOrders/>
          </section>

          <Category/>

          <Banner 
          src={secondBanner?.bannerImage} 
          discount={secondBanner?.discountRate} 
          title={secondBanner?.name} 
          price={formatter.format(secondBanner?.price)}
          discountPrice={secondBanner?.discountPrice}
          discountDate={secondBanner?.discountDate}
          preOrderDate={secondBanner?.preOrderDate}
          href={secondBanner?.seo}
          data={secondBanner}
          />

          <section className='container my-[15px]'>
            <Weekly/>
          </section>

          <section>
            <FeedBack/>
          </section>
          </main>
          <Footer/>
    </>
  )
}
