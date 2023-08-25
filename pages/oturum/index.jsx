/* eslint-disable react-hooks/rules-of-hooks */
import Auth from "@/components/Auth"
import Logo from "@/components/UI & Layout/Logo"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { Fragment } from "react"
import { CgClose } from "react-icons/cg"

const index = () => {

    const router = useRouter()
 
  return (
    <Fragment>
        <Head>
        <title>Oturum</title>
        </Head>
        <div className="w-full h-screen flex relative">
        <div className="w-full max-768:px-[20px] 768:w-1/2 h-full align-cntr">
            <Auth/>
        </div>

        <div className="w-1/2 h-full max-768:hidden">
            <Image alt="" src='/images/wallpaper.jpg' width={2900} height={1800} className="w-full h-full object-cover"/>
        </div>

        <div className="w-full absolute top-0 left-0 flex justify-between p-[30px]">
            <Logo/>

        <CgClose onClick={() => router.back()} size={30} className="text-graident cursor-pointer hover:text-secondary duration-300 hover:rotate-90"/>
        </div>
    </div>
    </Fragment>
  )
}

export default index