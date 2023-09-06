import FriendsPage from "@/components/Profil/Friends"
import Library from "@/components/Profil/Library"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Dashboard from "@/components/User/Dashboard"
import Reviews from "@/components/User/Reviews"
import Tab from "@/components/User/Tab"
import UserInfo from "@/components/User/UserInfo"
import Wishlist from "@/components/User/Wishlist"
import { UserContext } from "@/context/userContext"
import { getFriends, getLibrary } from "@/utils/Requests"
import axios from "axios"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const UserPage = () => {

    const {query, push} = useRouter()
    const {username} = query
    const {user} = useContext(UserContext)
    const [data, setData] = useState()
    const [tab, setTab] = useState(0)

    useEffect(() => {
        const getData = async() => {
            if(username) {
                const res = await axios.get(`${process.env.REQUEST}user/getByUsername/${username}`)
                setData(res?.data?.data)
            }
        }
        getData()
    }, [username])

    const [library, setLibrary] = useState()

    useEffect(() => {
      if(data) {
        getLibrary(setLibrary,data)
      }
    }, [data])

    const [friends, setFriends] = useState()

    useEffect(() => {
        if(data) {
          getFriends(setFriends, data)
        }
      }, [data])
    
    if(user && (user?.username === username)) {
        return push(`/profil/${user?.username}`)
    }
    return (
    <>
        <Head>
            <title>{username}</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_288px)]">
            <UserInfo
                user={data}
                currentUser={user}
            />

            <Tab
                setTab={setTab}
                tab={tab}
            />

            {tab === 0 && <Dashboard user={data} currentUser/>}

            {tab === 1 && <Wishlist user={data} />}

            {tab === 2 && <Library data={library} user/>}

            {tab === 3 && 
            <FriendsPage
            friendsList={friends}
            user={user}
                
            />}

            {tab === 4 && <Reviews user={data} currentUser={data}/>}
            
        </main>
        <Footer/>
    </>
  )
}

export default UserPage