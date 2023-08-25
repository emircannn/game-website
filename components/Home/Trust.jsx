import { AiFillWechat, AiOutlineSafety } from 'react-icons/ai'
import {FiUsers} from 'react-icons/fi'

const Trust = () => {
  return (
    <div className='h-[150px] 768:py-[40px] bg-gradient-to-l from-graident to-secondary-light'>
        <div className='container max-768:min-w-full mx-auto max-768:px-[5px] grid gap-[10px] grid-cols-3 h-full'>
            <div className='flex items-center justify-center max-768:flex-col leading-tight max-768:justify-start max-768:py-[15px] w-full h-full max-768:gap-[5px] max-768:text-center'>
                <div className='text-white text-[20px] 768:text-[40px]'><FiUsers/></div>
                <div className='768:ml-[15px]'>
                    <h4 className='text-white max-1140:text-[12px] text-[16px] font-semibold'>Çoklu Oyuncu Modu</h4>
                    <span className='text-white/75 max-1140:text-[10px] text-[14px] font-medium'>Çoklu oyuncu modu içeren oyunlara erişim imkanı sunuyoruz.</span>
                </div>
            </div>
            <div className='flex items-center justify-center max-768:flex-col leading-tight max-768:justify-start max-768:py-[15px] w-full h-full max-768:gap-[5px] max-768:text-center'>
                <div className='text-white text-[20px] 768:text-[40px]'><AiOutlineSafety/></div>
                <div className='768:ml-[15px]'>
                    <h4 className='text-white text-[16px] max-1140:text-[12px] font-semibold'>Güvenli Oyun Taahhütü</h4>
                    <span className='text-white/75 max-1140:text-[10px] text-[14px] font-medium'>Oyun dünyasınızın güvenliği artırmak için bir inisiyatif.</span>
                </div>
            </div>
            <div className='flex items-center max-768:flex-col leading-tight max-768:justify-start max-768:py-[15px] justify-center w-full h-full max-768:gap-[5px] max-768:text-center'>
                <div className='text-white text-[20px] 768:text-[40px]'><AiFillWechat/></div>
                <div className='768:ml-[15px]'>
                    <h4 className='text-white max-1140:text-[12px] text-[16px] font-semibold'>Müşteri Desteği</h4>
                    <span className='text-white/75 max-1140:text-[10px] text-[14px] font-medium'>Oyun dünyasınızın güvenliği artırmak için bir inisiyatif.</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trust