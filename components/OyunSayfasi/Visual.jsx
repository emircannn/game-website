import Image from "next/image"

const Visual = () => {

  return (
    <div>
        <h3 className="heading mt-[30px] mb-[10px]">Oyundan Görüntüler</h3>

        <div className="w-full h-[675px] max-768:h-[360px] max-450:h-[240px] max-1280:h-[500px] max-1336:h-[550px] 
        max-1140:h-[420px] rounded-xl overflow-hidden border-2 border-transparent hover:border-secondary duration-300">
        <iframe
        title="video-player"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/o3V-GvvzjE4"
        allowFullScreen
      />
        </div>

        <div className="grid grid-cols-2 gap-[30px] my-[30px]">
          <div className="rounded-xl overflow-hidden w-full border-2 border-transparent hover:border-secondary duration-300">
            <Image alt="" src='/images/fifa1.jpg' width={3000} height={1500} priority className="object-cover w-full h-full"/>
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
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

    </div>
  )
}

export default Visual