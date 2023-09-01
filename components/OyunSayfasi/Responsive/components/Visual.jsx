import Image from "next/image"

const Visual = ({
  data
}) => {
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="w-full max-768:h-[360px] max-450:h-[200px] rounded-xl overflow-hidden border-2 border-transparent hover:border-secondary duration-300">
        <iframe
        title="video-player"
        width="100%"
        height="100%"
        src={data?.youtubeLink}
        allowFullScreen
      />
        </div>

        <div className="grid grid-cols-2 gap-[10px] place-content-start">
          {data?.images[0] &&
          <div className="rounded-xl overflow-hidden w-full aspect-video border-2 border-transparent relative hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data?.images[0]} fill quality={100} priority className="object-cover"/>
          </div>}
          {data?.images[1] &&
          <div className="rounded-xl overflow-hidden w-full aspect-video  border-2 border-transparent relative hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data?.images[1]} fill quality={100} priority className="object-cover w-full h-full"/>
          </div>}
          {data?.images[2] &&
          <div className="rounded-xl overflow-hidden w-full aspect-video  border-2 border-transparent relative hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data?.images[2]} fill quality={100} priority className="object-cover w-full h-full"/>
          </div>}
          {data?.images[3] &&
          <div className="rounded-xl overflow-hidden w-full aspect-video border-2 border-transparent relative hover:border-secondary duration-300 cursor-pointer">
            <Image alt={data?.name} src={data?.images[3]} fill quality={100} priority className="object-cover w-full h-full"/>
          </div>}
          </div>
    </div>
  )
}

export default Visual