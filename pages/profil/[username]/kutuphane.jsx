import Library from "@/components/Profil/Library"
import Tab from "@/components/Profil/Tab"
import UserInfo from "@/components/Profil/UserInfo"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import Head from "next/head"
import { useRouter } from "next/router"

const LibraryPage = () => {

    const {query} = useRouter()
    const {username} = query

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

          <Library/>
        </main>
        <Footer/>
    </>
  )
}

export default LibraryPage