import Orders from "@/components/Profil/Orders"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import { UserContext } from "@/context/userContext"
import { getUserOrder } from "@/utils/Requests"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const OrderPage = () => {

    const {query} = useRouter()
    const {username} = query
    const {user} = useContext(UserContext)

    const [data, setData] = useState()

    useEffect(() => {
      if(user) {
        getUserOrder(user, setData)
      }
    }, [user])
    
    console.log(data)

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

          <Orders
            data={data}
          />
        </main>
        <Footer/>
    </>
  )
}

export default OrderPage