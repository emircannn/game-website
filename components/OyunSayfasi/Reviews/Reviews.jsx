import Button from '@/components/UI & Layout/Form/Button'
import BestReviews from './components/BestReviews'
import RecentReviews from './components/RecentReviews'
import SetReview from './SetReview'
import { useRouter } from 'next/router'

const Reviews = ({routeReview, data, user, reviews, totalPages}) => {
    const {push} = useRouter()

  return (
    <div id={routeReview} className='mt-[60px]'>
        <h4 className='heading my-[30px]' >Değerlendirmeler</h4>
        <SetReview
        data={data}
        width='120'
        height='120'
        />

        {reviews &&
        <div className='mt-[60px] w-full h-full flex gap-[30px] '>
            <div className='w-[60%] flex flex-col gap-[20px]'>
              {/* <h5 className='text-white font-semibold'>En İyi Yorumlar</h5> */}
            <div className='grid grid-rows-2 grid-cols-1 gap-[30px] w-full'>
                {reviews && reviews[0] &&<BestReviews data={reviews[0]} user={user}/>}
                {reviews && reviews[1] &&<BestReviews data={reviews[1]} user={user}/>}
            </div>
            </div>

            <div className='flex flex-col w-[40%] h-full gap-[20px]'>
              {/* <h5 className='text-white font-semibold'>Son Yorumlar</h5> */}
            <div className='grid grid-rows-3 grid-cols-1 gap-[30px] w-full'>
              {reviews && reviews[2] &&<RecentReviews data={reviews[2]} user={user}/>}
              {reviews && reviews[3] &&<RecentReviews data={reviews[3]} user={user}/>}
              {reviews && reviews[4] &&<RecentReviews data={reviews[4]} user={user}/>}
            </div>
            </div>
        </div>
        }
        {!reviews?.length > 0 ? 
        <div className='flex items-center justify-center text-[14px] font-semibold text-white'>
          Henüz Değerlendirme yapılmadı...
        </div> : null}

        <div className='align-cntr mt-[30px]'>
        {totalPages && totalPages > 1 ? 
        <Button
        title='Tamamını Gör'
        onClick={() => push(`/degerlendirmeler/${data?.seo}`)}
        textSize='14px'
        />: null}
        </div>
    </div>
  )
}

export default Reviews