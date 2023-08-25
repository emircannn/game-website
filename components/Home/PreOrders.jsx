import Horizontal from '../GameBox/Horizontal'
import GameSkeleton from '../MaterialUI/GameSkeleton'

const PreOrders = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Ön Sipariş</h2>

        <button className='button'>Hepsini Gör</button>
        </div>

        <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2'>
            <GameSkeleton/>
            <GameSkeleton/>
            <GameSkeleton/>
            <GameSkeleton/>
            <GameSkeleton/>
            <GameSkeleton/>
        </div>
    </div>
  )
}

export default PreOrders