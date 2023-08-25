import FeedbackBox from "@/components/GameBox/FeedbackBox"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Head from "next/head"

const index = () => {
  return (
    <>
    <Head>
        <title>Değerlendirmeler</title>
    </Head>
    <Header/>
      <main className="container min-h-[calc(100vh_-_324px)]">
        <h2 className="heading mb-[30px]">Tüm Değerlendirmeler</h2>
        <div className="w-full grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[20px]">
        <FeedbackBox
        like={true}
        readMore={true}
        />
        <FeedbackBox
        readMore={true}
        />
        <FeedbackBox
        like={true}
        readMore={true}/>
        <FeedbackBox
        like={true}
        readMore={true}
        />
        <FeedbackBox
        readMore={true}
        />
        <FeedbackBox
        like={true}
        readMore={true}/>
        </div>
      </main>
    <Footer/>
    </>
  )
}

export default index