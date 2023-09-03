import Link from "next/link"
import Horizontal from "../GameBox/Horizontal"
import Button from "./Form/Button"
import GameSkeleton from "../MaterialUI/GameSkeleton"

const GameWrapper = ({
    continueBtn,
    showAll,
    title,
    isResponsive, 
    data,
    href,
    search=false  
}) => {
    return (
      <div className='my-[20px] 768:my-[60px] 1140:min-h-[525px] relative'>
          <div className='w-full flex items-center justify-between'>
          <h2 className='heading'>{title}</h2>
  
          {showAll === true && 
          <Link href={href}>
            <button className='button'>Hepsini Gör</button>
          </Link>}
          </div>
  
          <div className='mt-[30px] grid-cols-1 grid gap-[10px] 1140:gap-[30px] 1140:grid-cols-3 768:grid-cols-2'>
              {data ? 
              data?.length > 0 ?
              data?.map((item,i) => (
                <Horizontal
                  key={i}
                  data={item}
                />
              )) :
             search && <div className="text-[16px] font-semibold text-white absolute top-0 left-0 w-full h-full flex items-center justify-center">
              Oyun bulunamadı...
             </div>
              : 
              <>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
                <GameSkeleton/>
              </>}
          </div>

        {data?.length > 6 && continueBtn === true ?   
        <div className="mt-[30px] align-cntr">
                <Button
                title='Devamını Gör' 
                textSize={`${ isResponsive ? "13px" : "14px"}`}
                />
            </div>: null}
      </div>
    )
  }
  
  export default GameWrapper