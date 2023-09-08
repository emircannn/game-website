import '@/styles/globals.css'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '@/context/userContext'
import Chat from '@/components/Chat'
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  
  
  return (
    <UserContextProvider>
      <Toaster/>
      <Chat/>
      <NextNProgress color="#8585f5" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <Component {...pageProps} />
    </UserContextProvider>
  )
}
export default MyApp
