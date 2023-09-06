import Image from "next/image"
import Button from "../UI & Layout/Form/Button"
import {IoIosArrowBack} from 'react-icons/io'
import { AiFillEdit } from "react-icons/ai"

const Banner = ({
    bg='/images/fifa3.jpg',
    thumb='/images/fifa.jpg',
    review,
    back
}) => {
  return (
    <div 
    style={{}}
    className={` 1336:h-[550px] 450:h-[400px] h-[300px] w-full top-0 left-0 absolute`}>
        <div className='w-full h-full relative clip-polygon'>
        <Image alt='' src={bg} fill quality={100} className='w-full h-full object-cover'/>
        <span className='absolute top-0 left-0 h-full w-full bg-black/30'></span>
        </div>

        <div className=" w-full z-10 absolute bottom-0 max-768:hidden">
            <div className="flex flex-col max-w-[620px] mx-auto gap-[20px]">
                <div className='w-full h-[200px] 1336:h-[350px] relative rounded-xl overflow-hidden'>
                    <Image alt='' src={thumb} fill quality={100} className='w-full h-full object-cover'/>
                </div>
            <div className="gap-[20px] flex">
                <Button
                    wfull
                    height='h-[56px]'
                    mt="0"
                    iconLeft={<IoIosArrowBack className="text-white"/>}
                    title='Oyun Sayfasına Geri Dön'
                    onClick={back}
                />
                <Button
                    wfull
                    height='h-[56px]'
                    mt="0"
                    title='Değerlendirme Bırak'
                    iconRight={<AiFillEdit size={18}/>}
                    onClick={review}
                />
            </div>
            </div>

        </div>
    </div>
  )
}

export default Banner