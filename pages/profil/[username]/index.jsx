import Dashboard from "@/components/Profil/Dashboard/Dashboard"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import { UserContext } from "@/context/userContext"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"

const ProfilPage = () => {

    const {query} = useRouter()
    const {username} = query

    const {user} = useContext(UserContext)
    const router = useRouter();

    useEffect(() => {
      if(!user) {
        return router.push('/oturum')
      }
      if(user && (user.username !== username)) {
        return router.push(`/profil/${username}`)
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, username])
    

  return (
    <>
        <Head>
            <title>{username}</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)]">
          <UserInfo
            username={username}
          />

          <Tab
            username={username}
          />

          <Dashboard/>
        </main>
        <Footer/>
    </>
  )
}



export default ProfilPage