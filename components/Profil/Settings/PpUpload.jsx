import Avatar from '@/components/UI & Layout/Avatar'
import { handleSelectImage } from '@/utils/helper'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { BsUpload } from 'react-icons/bs'
import { PacmanLoader } from 'react-spinners'

const PpUpload = ({
    user
}) => {
    const [ppImage, setPPImage] = useState(null)
    const [ppImagePre, setPPImagePre] = useState(null)
    const [loading, setLoading] = useState(false)
    const {reload} = useRouter()

    useEffect(() => {
      if(ppImage) {
        const uploadImage = async() => {
            try {
                const token = await localStorage.getItem('authToken');
                const formData = new FormData();
                formData.append('image', ppImage);
                setLoading(true)
                const res = await axios.post(`${process.env.REQUEST}user/updateImage?id=${user?._id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                    })
                if(!res.data.error) {
                toast.success(res.data.message, {position: 'bottom-right'})
                setLoading(false)
                setPPImage(null)
                setPPImagePre(null)/* 
                reload() */
                }
            } catch (error) {
                toast.error(error?.response?.data?.message.split(':')[1], {position: 'bottom-right'})
                setLoading(false)
            }
        }

        uploadImage()
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ppImage])
    

  return (
    <div className="flex flex-col gap-[20px]">
                <h5 className="text-[16px] font-semibold text-white">
                    Profil Resmi
                </h5>
                <div className="bg-primary-lighter rounded-xl pr-[20px] py-[10px] pl-[10px] flex items-center gap-[20px] ">
                    <div className='w-[40px] shrink-0'>
                    <Avatar
                        width="40"
                        height="40"
                        iconHeight="15"
                        iconWidth="15"
                        backgroundColor='#09071d'
                        src={ppImagePre ? ppImagePre : user?.image}
                    />
                    </div>

                    {loading ?
                    <div className='flex items-center justify-center w-[124px]'>
                        <PacmanLoader size={13} color='#fff'/>
                    </div>
                    :
                    <div className="flex items-center gap-[20px] relative cursor-pointer w-full justify-between">
                        <p className="text-secondary font-medium">
                            Dosya Yükle
                        </p>

                        <BsUpload size={18} className="text-secondary"/>

                        <input type="file" 
                        onChange={(e) => handleSelectImage(e, setPPImage, setPPImagePre)}
                        className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>}
                </div>
    </div>
  )
}

export default PpUpload