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
import Head from "next/head"
import { Fragment, useState } from "react"

const index = () => {

  const [showMore, setShowMore] = useState(false)

  return (
    <Fragment>
      <Head>
        <title>Fifa 23</title>
      </Head>
    <Header/>
    <div className="max-768:hidden">
      <Hero src={'/images/deneme.jpg'}/>
      <main className="container">
      <Top/>

      <AboutGame 
      setShowMore={setShowMore} 
      marginTop={true}
      routeAbout='#about'
      routeReview='#review'/>

      <Visual/>
      <Description 
      setShowMore={setShowMore} 
      showMore={showMore}
      routeAbout='about'/>

      <Configurations/>

      <Reviews
      routeReview='review'
      />

      <GameWrapper
      title='Benzer Oyunlar'
      showAll={false}
      continueBtn={true}
      />
      </main>
    </div>
    <Responsive 
    setShowMore={setShowMore} 
    showMore={showMore}/>
    <Footer/>
    </Fragment>
  )
}

export default index