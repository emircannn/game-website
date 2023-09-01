import Image from "next/image"
import TopRight from "./TopRight"



const Top = ({
  data
}) => {
  return (
    <div className="768:top-[270px] max-768:left-0 max-768:top-[120px] max-450:top-[90px] absolute grid grid-cols-1 768:grid-cols-2 768:gap-x-[30px] 1140:gap-x-[60px]
    xl:w-[1200px] lg:w-[1024px] md:w-[768px]">
        <div className="768:rounded-xl overflow-hidden w-full h-full">
            <Image alt={data?.name} src={data?.coverImage} width={1000} height={500} className=' object-cover w-full h-full'/>
        </div>

        <TopRight
          data={data}
        />
    </div>
  )
}

export default Top