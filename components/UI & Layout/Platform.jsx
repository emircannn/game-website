import Steam from '../../public/icons/steam.svg'
import EA from '../../public/icons/ea.svg'
import Ubisoft from '../../public/icons/ubisoft.svg'
import EG from '../../public/icons/eg.svg'

const Platform = ({platform}) => {
  return (
    <div className='flex items-center gap-[6px]'>
        { platform === 'Steam' && <Steam height='28' width='28'/>}
        { platform === 'EA' && <EA height='28' width='28' fill='#FF4545'/>}
        { platform === 'Ubisoft' && <Ubisoft height='28' width='28' fill='#0071FE'/>}
        { platform === 'Epic Games' && <EG height='28' width='28' fill='#FF4545'/>}
        <span className='text-white text-[13px] font-semibold tracking-wider'>{platform}</span>
    </div>
  )
}

export default Platform