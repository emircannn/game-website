import FriendsPage from "@/components/Profil/Friends"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import { UserContext } from "@/context/userContext"
import { getFriendRequest, getFriends } from "@/utils/Requests"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const Friends = () => {

    const {query} = useRouter()
    const {username} = query
    const {user} = useContext(UserContext)

    const [data, setData] = useState()
    const [requests, setRequests] = useState()

    useEffect(() => {
      if(user) {
        getFriends(setData, user)
      }
    }, [user])
    useEffect(() => {
      if(user) {
        getFriendRequest(setRequests, user)
      }
    }, [user])
    

  return (
    <>
        <Head>
            <title>Arkadaşlar</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_288px)]">
          <UserInfo
            username={username}
          />

          <Tab
            username={username}
          />

          <FriendsPage
            friendsList={data}
            requestList={requests}
            user={user}
          />
        </main>
        <Footer/>
    </>
  )
}

export default Friends