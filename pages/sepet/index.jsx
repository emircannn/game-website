import CartWrapper from "@/components/Cart/CartWrapper"
import Summary from "@/components/Cart/Summary"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Head from "next/head"

const index = () => {
  return (
    <>
        <Head>
            <title>Sepet</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)] max-768:flex-col flex gap-[30px] my-[30px]">
            <CartWrapper/>
            <Summary/>
        </main>
        <Footer/>
    </>
  )
}

export default index