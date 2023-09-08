
import {ImAttachment} from 'react-icons/im'
import Input from '../UI & Layout/Form/Input'
import Button from '../UI & Layout/Form/Button'
import { handleSelectImage } from '@/utils/helper'

const SendMessage = ({
    setPhoto,
    setPhotoPre,
    handleSubmit,
    content,
    setContent
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex justify-between 450:items-end items-center h-full p-[10px] relative overflow-x-hidden gap-[10px]">
            <div className="w-full">
            <Input
                width='100%'
                minWidth='100%'
                placeholder='Bir şeyler yaz...'
                onChange={(e) => setContent(e.target.value)}
                value={content}
            />
            </div>

        <div className="flex items-center gap-[5px] flex-col shrink-0">
        <div className="flex items-center justify-end px-[10px]">
            <button className="flex items-center text-[13px] gap-[10px] text-white duration-300 hover:text-secondary group relative">
                <ImAttachment size={16} className="group-hover:text-secondary text-white duration-300 cursor-pointer"/>
                Dosya Yükle
                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0" onChange={(e) => handleSelectImage(e,setPhoto, setPhotoPre)}/>
            </button>
        </div>

            <Button
                type='submit'
                title='Gönder'
                height='h-[30px]'
                mt='0'
            />
        </div>
    </form>
  )
}

export default SendMessage