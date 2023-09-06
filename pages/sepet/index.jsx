/* eslint-disable react-hooks/rules-of-hooks */
import CartWrapper from "@/components/Cart/CartWrapper"
import Summary from "@/components/Cart/Summary"
import Footer from "@/components/UI & Layout/Footer"
import Header from "@/components/UI & Layout/Header"
import { UserContext } from "@/context/userContext"
import { getCart, getWishlist } from "@/utils/Requests"
import Head from "next/head"
import { useContext, useEffect, useState } from "react"

const index = () => {
  const [data, setData] = useState()
  const [wishlist, setWishlist] = useState()
  const {user} = useContext(UserContext)

  useEffect(() => {
    getCart(user?._id, setData)
  }, [user])

  useEffect(() => {
    if(user) {
        getWishlist(setWishlist, user)
    }
}, [user])
  
  return (
    <>
        <Head>
            <title>Sepet</title>
        </Head>

        <Header/>
        <main className="container min-h-[calc(100vh_-_300px)] max-768:flex-col flex gap-[30px] my-[30px]">
            <CartWrapper
              data={data}
              wishlist={wishlist}
              user={user}
              setData={setData}
              setWishlist={setWishlist}
            />
            <Summary
              data={data}
              user={user}
            />
        </main>
        <Footer/>
    </>
  )
}

export default index