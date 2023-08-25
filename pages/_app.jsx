import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '@/context/userContext'

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Toaster/>
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
export default MyApp
