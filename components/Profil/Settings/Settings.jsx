import PpUpload from "./PpUpload"
import Username from "./Username"
import InputLabel from "./InputLabel"
import Button from "@/components/UI & Layout/Form/Button"
import { useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"
import { toast } from "react-hot-toast"


const Settings = ({
  user
}) => {
  const [steamLink, setSteamLink] = useState(undefined)
  const [eaLink, setEaLink] = useState(undefined)
  const [ubisoftLink, setUbisoftLink] = useState(undefined)
  const [youtubeLink, setYoutubeLink] = useState(undefined)
  const [twitchLink, setTwitchLink] = useState(undefined)
  const [discordLink, setDiscordLink] = useState(undefined)

  const [loading, setLoading] = useState(false)
  const {reload} = useRouter()

  const updateSocialLink = async() => {
    try {
      const form = {
        steamLink,
        eaLink,
        youtubeLink,
        ubisoftLink,
        twitchLink,
        discordLink
      }
      const token = await localStorage.getItem('authToken');
      setLoading(true)
      const res = await axios.post(`${process.env.REQUEST}user/updateByUsername/${user?.username}`, form, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if(!res.data.error) {
        toast.success(res.data.message, {position: 'bottom-right'})
        setLoading(false)
        return reload()
      }
    } catch (error) {
      toast.error(error?.response?.data?.message, {position: 'bottom-right'})
      setLoading(false)
    }
  }
  
  return (
    <div className="my-[30px] w-fit mx-auto flex flex-col gap-[10px] 768:gap-[20px] items-center justify-center">
        <div className="flex gap-[10px] 768:gap-[40px] max-768:flex-col">
            <PpUpload
              user={user}
            />

            <Username
              user={user}
            />
        </div>

        <h5 className="text-[18px] font-semibold text-white text-center mt-[20px] flex w-full">
            Sosyal Linkler
        </h5>

        <form className="flex flex-col gap-[20px] items-center">
          <div className="grid grid-cols-2 max-768:grid-cols-1 gap-[20px]">
              <InputLabel
              onChange={(e) => setSteamLink(e.target.value)}
              />
              <InputLabel
                label="Uplay"
                placeholder='https://ubisoftconnect.com/en-GB/profile/...'
                onChange={(e) => setUbisoftLink(e.target.value)}
              />
              <InputLabel
                label="EA"
                placeholder="EA ID"
                onChange={(e) => setEaLink(e.target.value)}
              />
              <InputLabel
                label="Youtube"
                placeholder="https://youtube.com/..."
                onChange={(e) => setYoutubeLink(e.target.value)}
              />
              <InputLabel
                label="Twitch"
                placeholder="https://www.twitch.tv/..."
                onChange={(e) => setTwitchLink(e.target.value)}
              />
              <InputLabel
                label="Discord"
                placeholder="DiscordTag#0000"
                onChange={(e) => setDiscordLink(e.target.value)}
              />
          </div>

          <Button
                height='h-[55px]'
                mt="0"
                title='Gönder'
                disabled={loading}
                onClick={() => updateSocialLink()}
            />
        </form>

        <h5 className="text-[18px] font-semibold text-white text-center mt-[20px] flex w-full">
            Şifre Ayarları
        </h5>

        <form className="flex flex-col gap-[20px] items-center">
          <div className="grid grid-cols-2 max-768:grid-cols-1 gap-[20px]">
              <InputLabel
                label="Mevcut Şifre"
                placeholder='*****'
                type="password"
              />
              <InputLabel
                label="Yeni Şifre"
                placeholder="*****"
                type="password"
              />
              <InputLabel
                label="Yeni Şifre Tekrar"
                placeholder="*****"
                type="password"
              />
          </div>
              <Button
                    height='h-[55px]'
                    mt="0"
                    title='Gönder'
                    disabled={loading}
                />
        </form>
    </div>
  )
}

export default Settings