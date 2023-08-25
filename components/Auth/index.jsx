import { useState, useContext, useEffect } from "react"
import Toggle from "./components/Toggle"
import SignUp from "./components/SignIn"
import LogIn from "./components/LogIn"
import { UserContext } from "@/context/userContext"
import { useRouter } from "next/router"


const Auth = () => {

  const {user} = useContext(UserContext)
  const {push} = useRouter()

  useEffect(() => {
    if(user) {
      push(`/profil/${user.username}`)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])
  

    const [login, setLogin] = useState(true) 

  return (
    <div className="p-[30px] bg-primary-lighter max-768:w-full rounded-xl">
        <Toggle setLogin={setLogin} login={login}/>

        <div className="relative">
        {login && <LogIn/>}
        {!login && <SignUp setLogin={setLogin}/>}
        </div>
    </div>
  )
}

export default Auth