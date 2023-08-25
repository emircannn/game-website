import { useState } from "react"
import Toggle from "./components/Toggle"
import SignUp from "./components/SignIn"
import LogIn from "./components/LogIn"


const Auth = () => {

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