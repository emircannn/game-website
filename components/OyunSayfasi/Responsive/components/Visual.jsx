import Image from "next/image"

const Visual = () => {
  return (
    <div className="flex flex-col gap-[20px]">
        <div className="w-full max-768:h-[360px] max-450:h-[200px] rounded-xl overflow-hidden border-2 border-transparent hover:border-secondary duration-300">
        <iframe
        title="video-player"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/o3V-GvvzjE4"
        allowFullScreen
      />
        </div>

        <div className="grid grid-cols-2 gap-[10px]">
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt="" src='/images/fifa2.jpg' width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt="" src='/images/fifa3.jpg' width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt="" src='/images/fifa4.jpg' width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300 cursor-pointer">
            <Image alt="" src='/images/fifa5.gif' width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>
          </div>
    </div>
  )
}

export default Visual