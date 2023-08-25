import CategoryBanner from '@/components/UI & Layout/CategoryBanner'
import Footer from '@/components/UI & Layout/Footer'
import GameWrapper from '@/components/UI & Layout/GameWrapper'
import Header from '@/components/UI & Layout/Header'
import Head from 'next/head'
import { Fragment } from 'react'

const index = () => {
  return (
    <Fragment>
        <Head>
            <title>Strateji</title>
        </Head>

        <Header/>
        <div>

            <CategoryBanner
            title='Strateji'
            src='/images/strategy.webp'
            char='/images/suleyman.png'
            />

            <main className='1336:mt-[460px] 450:mt-[320px] mt-[230px] container'>
            <GameWrapper
            title={'Strateji Oyunları'}
            continueBtn={true}
            />
            </main>
        </div>
        <Footer/>
    </Fragment>
  )
}

export default index