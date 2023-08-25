import Avatar from '@/components/UI & Layout/Avatar'
import { BsUpload } from 'react-icons/bs'

const PpUpload = () => {
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
                    />
                    </div>

                    <div className="flex items-center gap-[20px] relative cursor-pointer w-full justify-between">
                        <p className="text-secondary font-medium">
                            Dosya Yükle
                        </p>

                        <BsUpload size={18} className="text-secondary"/>

                        <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" />
                    </div>
                </div>
    </div>
  )
}

export default PpUpload