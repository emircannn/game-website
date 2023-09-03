/* eslint-disable react/no-unescaped-entities */
import { dateFormater } from '@/utils/helper'
import Heart from '../../public/icons/heartfill.svg'
import Line from "../UI & Layout/Line"

const AboutGame = ({
    setShowMore,
    marginTop,
    textSize,
    routeAbout,
    routeReview,
    data
}) => {

    const htmlString = data?.desc
  return (
    <div className={`${ marginTop && "mt-[640px] max-768:mt-[760px] max-450:mt-[600px]"} gap-x-[60px] gap-y-[20px] grid max-768:grid-cols-1 grid-cols-2`}>
        <div className="text-white">
            <div className=" text-white/75 font-medium text-[13px] leading-6 tracking-wider line-clamp-5" 
            dangerouslySetInnerHTML={{ __html: htmlString }} />

            <a onClick={() => setShowMore(true)} href={routeAbout} className="font-medium text-secondary">Devamını Oku</a>
        </div>

        <div className="">
            <div className="flex items-center group">
                <Heart width='20' height='20'/>
                <a href={routeReview} className="text-white ml-[8px] group-hover:text-secondary duration-300 cursor-pointer">{data?.reviews.length} Değerlendirme</a>
            </div>

            <div className="768:mt-[35px] mt-[10px]">
                <Line 
                title='Yükleme' 
                data='Oyunumu Nasıl Aktive Ederim?'
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Geliştirici' 
                data={data?.developer}
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Çıkış Tarihi' 
                data={dateFormater(data?.releaseDate)}
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
                <Line 
                title='Kategori' 
                data={data?.category?.name}
                titleColor='#b6b6f8'
                dataHover={true}
                dataColor='white'
                dataTextSize={textSize}
                titleTextSize={textSize}
                />
            </div>
        </div>
    </div>
  )
}

export default AboutGame