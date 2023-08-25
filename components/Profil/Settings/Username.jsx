import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'

const Username = () => {
  return (
    <div className="flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-semibold text-white">
                    Kullanıcı Adı
                </h5>
                
                  <div className="flex items-center gap-[20px]">
                    <div className="w-[350px] max-768:w-full">
                    <Input height='55' width='100%' placeholder='emircanny'/>
                    </div>

                    <Button
                      height='h-[55px]'
                      mt="0"
                      title='Gönder'
                    />
                  </div>
            </div>
  )
}

export default Username