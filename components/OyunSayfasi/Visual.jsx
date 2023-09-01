import Image from "next/image"

const Visual = ({
  data
}) => {

  return (
    <div>
        <h3 className="heading mt-[30px] mb-[10px]">Oyundan Görüntüler</h3>

        <div className="w-full h-[675px] max-768:h-[360px] max-450:h-[240px] max-1280:h-[500px] max-1336:h-[550px] 
        max-1140:h-[420px] rounded-xl overflow-hidden border-2 border-transparent hover:border-secondary duration-300">
        <iframe
        title="video-player"
        width="100%"
        height="100%"
        src={data.youtubeLink}
        allowFullScreen
      />
        </div>

        <div className="grid grid-cols-2 gap-[30px] my-[30px]">
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300">
            <Image alt="" src={data.images[0]} width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
          {data.images[1] &&<div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data.images[1]} width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>}
          {data.images[2] &&<div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data.images[2]} width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>}
          {data.images[3] &&<div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data.images[3]} width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>}
          {data.images[4] &&<div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data.images[4]} width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>}
          </div>
        </div>

    </div>
  )
}

export default Visual