import { dateFormater, formatter } from "@/utils/helper"
import Image from "next/image"

const Orders = ({
  data
}) => {
  return (
    <div className="my-[30px] grid grid-cols-1 768:grid-cols-2 gap-[10px] 768:gap-[20px] min-h-[215px] relative">
      {data && data.length > 0 ?
        data.map((order, i) => (
          <div key={i} className="w-full rounded-xl bg-primary-lighter p-[15px] h-fit flex flex-col gap-[10px] duration-200 hover:neon-blue">
        <div className="grid grid-cols-3 gap-[10px] w-full">
          <div className="w-full flex flex-col items-center gap-[4px]">
            <span className="text-[12px] 450:text-[14px] font-semibold text-secondary">
              Sipariş Tarihi
            </span>
            <span className="text-[11px] 450:text-[13px] text-white">
              {dateFormater(order.createdAt)}
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-[4px]">
            <span className="text-[12px] 450:text-[14px] font-semibold text-secondary">
              Sipariş Tutarı
            </span>
            <span className="text-[11px] 450:text-[13px] text-white">
            {order.subtotal > order.total ? formatter.format(order.total) : formatter.format(order.sutotal)}
            </span>
          </div>
          <div className="w-full flex flex-col items-center gap-[4px]">
            <span className="text-[12px] 450:text-[14px] font-semibold text-secondary">
              Sipariş Durumu
            </span>
            <span className={`text-[11px] 450:text-[13px]  ${order.status === false ? 'text-graident-dark' : 'text-yellow-500'}`}>
              {order.status === false ? 'Beklemede' : 'Onaylandı'}
            </span>
          </div>
        </div>

        {order.game?.map((game, i) => (
          <div key={i} className="grid grid-cols-3 gap-[10px] p-[10px] rounded-xl bg-primary">
          <div className="w-full flex items-center justify-center">
            <div className="w-[40px] 450:w-[50px] aspect-square rounded-xl overflow-hidden relative border border-graident">
              <Image alt={game.seo} src={game.coverImage} fill quality={100} className="object-cover"/>
            </div>
          </div>

          <div className="w-full flex items-center justify-center text-[12px] 450:text-[14px] text-secondary-light font-semibold text-center">
            {game.name}
          </div>
          <div className="w-full flex items-center justify-center text-[12px] 450:text-[14px] text-secondary-light font-semibold">
            {game.platform}
          </div>
        </div>
        ))}

        {order.orderInfo && 
          <div className="p-[10px] rounded-xl bg-primary text-[14px] flex flex-col gap-[8px]">
          <span className="text-secondary font-semibold border-b border-secondary pb-[4px]">Erişim Bilgileri</span>

          <p className="text-white">
            {order.orderInfo}
          </p>
        </div>}
      </div>
        ))
      : 
      <p className="w-full h-full absolute top-0 left-0 flex items-center justify-center text-[14px] text-white font-semibold">
          Henüz Sipariş vermediniz...
      </p>
      }
    </div>
  )
}

export default Orders