import Orders from "@/components/Profil/Orders"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Head from "next/head"
import { useRouter } from "next/router"

const OrderPage = () => {

    const {query} = useRouter()
    const {username} = query

  return (
    <>
        <Head>
            <title>Siparişlerim</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)]">
          <UserInfo
            username={username}
          />

          <Tab
            username={username}
          />

          <Orders/>
        </main>
        <Footer/>
    </>
  )
}

export default OrderPage