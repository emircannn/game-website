import Button from '@/components/UI & Layout/Form/Button'
import SetReview from './SetReview'
import BestReviews from './components/BestReviews'
import RecentReviews from './components/RecentReviews'

const Reviews = ({routeReview, data}) => {
  return (
    <div id={routeReview} className='mt-[60px]'>
        <h4 className='heading my-[30px]' >Değerlendirmeler</h4>
        <SetReview
        data={data}
        width='120'
        height='120'
        />

        <div className='mt-[60px] w-full h-full flex gap-[30px] '>
            <div className='w-[60%] flex flex-col gap-[20px]'>
              <h5 className='text-white font-semibold'>En İyi Yorumlar</h5>
            <div className='grid grid-rows-2 grid-cols-1 gap-[30px] w-full'>
                <BestReviews/>
                <BestReviews/>
            </div>
            </div>

            <div className='flex flex-col w-[40%] h-full gap-[20px]'>
              <h5 className='text-white font-semibold'>Son Yorumlar</h5>
            <div className='grid grid-rows-3 grid-cols-1 gap-[30px] w-full'>
              <RecentReviews/>
              <RecentReviews/>
              <RecentReviews/>
            </div>
            </div>
        </div>

        <div className='align-cntr mt-[30px]'>
        <Button
        title='Tamamını Gör'
        textSize='14px'
        />
        </div>
    </div>
  )
}

export default Reviews