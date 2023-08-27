import Settings from "@/components/Profil/Settings/Settings"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import { UserContext } from "@/context/userContext"
import Head from "next/head"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"

const SettingsPage = () => {

    const {query, push} = useRouter()
    const {username} = query

    const {user} = useContext(UserContext)

    useEffect(() => {
      if(user?.username !== username) {
        push(`/profil/${user?.username}/ayarlar`)
      }
      if(!user) {
        push('/oturum')
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, username])

  return (
    <>
        <Head>
            <title>Ayarlar</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)]">
          <UserInfo
            username={username}
          />

          <Tab
            username={username}
          />

          <Settings
            user={user}
          />
        </main>
        <Footer/>
    </>
  )
}

export default SettingsPage