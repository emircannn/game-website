import Button from '@/components/UI & Layout/Form/Button'
import Input from '@/components/UI & Layout/Form/Input'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const Username = ({
  user
}) => {

  const [username, setUsername] = useState('')
  const [loading, setLoading] = useState(false)
  const {reload} = useRouter()

  const updateUsername = async() => {
    try {
      const token = await localStorage.getItem('authToken');
      setLoading(true)
      const res = await axios.post(`${process.env.REQUEST}user/updateByUsername/${user?.username}`, {username}, {
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
    <div className="flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-semibold text-white">
                    Kullanıcı Adı
                </h5>
                
                <div className="flex items-center gap-[20px]">
                    <div className="w-[350px] max-768:w-full">
                    <Input height='55' width='100%' placeholder={user?.username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>

                    <Button
                      height='h-[55px]'
                      mt="0"
                      title='Gönder'
                      disabled={loading}
                      onClick={() => updateUsername()}
                    />
                </div>
            </div>
  )
}

export default Username