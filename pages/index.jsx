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
import { useContext, useEffect } from 'react'
import { UserContext } from '@/context/userContext'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const {setUser} = useContext(UserContext)

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    if (!token) {
        setUser(null)
    }
  }, [setUser])
  

  return (
    <>
      <Head>
        <title>Game Web Site</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
          <Header/>
          <Hero src={'/images/deneme.jpg'} discount={25} title={'Fifa 23'} price={'119.90'}/>
          <main>
          <section className='container 1336:mt-[460px] 450:mt-[320px] mt-[230px]'>
            <GameWrapper
            title={'Trendler'}
            />
          </section>

          <div className='my-[30px]'>
            <Trust/>
          </div>

          <section className='container'>
            <PreOrders/>
          </section>

          <Category/>

          <Banner src={'/images/re4.jpg'} discount={14} title={'Resident Evil 4'} price={'84.90'}/>

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
