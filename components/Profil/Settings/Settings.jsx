import PpUpload from "./PpUpload"
import Username from "./Username"
import InputLabel from "./InputLabel"
import Button from "@/components/UI & Layout/Form/Button"


const Settings = () => {
  return (
    <div className="my-[30px] w-fit mx-auto flex flex-col gap-[10px] 768:gap-[20px] items-center justify-center">
        <div className="flex gap-[10px] 768:gap-[40px] max-768:flex-col">
            <PpUpload/>

            <Username/>
        </div>

        <h5 className="text-[18px] font-semibold text-white text-center mt-[20px] flex w-full">
            Sosyal Linkler
        </h5>

        <form className="flex flex-col gap-[20px] items-center">
          <div className="grid grid-cols-2 max-768:grid-cols-1 gap-[20px]">
              <InputLabel/>
              <InputLabel
                label="Uplay"
                placeholder='https://ubisoftconnect.com/en-GB/profile/...'
              />
              <InputLabel
                label="EA"
                placeholder="EA ID"
              />
              <InputLabel
                label="Youtube"
                placeholder="https://youtube.com/..."
              />
              <InputLabel
                label="Twitch"
                placeholder="https://www.twitch.tv/..."
              />
              <InputLabel
                label="Discord"
                placeholder="DiscordTag#0000"
              />
          </div>

          <Button
                height='h-[55px]'
                mt="0"
                title='Gönder'
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
                />
        </form>
    </div>
  )
}

export default Settings