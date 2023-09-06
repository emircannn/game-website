import Library from "@/components/Profil/Library"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Loading from "@/components/UI & Layout/Loading"
import { UserContext } from "@/context/userContext"
import { getLibrary } from "@/utils/Requests"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const LibraryPage = () => {

    const {query} = useRouter()
    const {username} = query
    const {user} = useContext(UserContext)

    const [data, setData] = useState()

    useEffect(() => {
      if(user) {
        getLibrary(setData,user)
      }
    }, [user])

    if(!data) {
      return <Loading/>
    }
    
  return (
    <>
        <Head>
            <title>Kütüphane</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)]">
          <UserInfo
            username={username}
          />

          <Tab
            username={username}
          />

          <Library
            data={data}
          />
        </main>
        <Footer/>
    </>
  )
}

export default LibraryPage