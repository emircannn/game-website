import { useRouter } from "next/router"
import FeedbackBox from "../GameBox/FeedbackBox"
import ReviewSkeleton from "../MaterialUI/ReviewSkeleton"

const FeedBack = () => {

  const {push} = useRouter()

  return (
    <> 
        <div className='container align-btwn pt-[40px] pb-[30px]'>
        <h4 className='heading'>Değerlendirmeler</h4>
        <button onClick={() => push('/degerlendirmeler')} className='button'>Hepsini Gör</button>
        </div>

        <div className='grid grid-cols-4 max-1280:grid-cols-3 max-768:grid-cols-2 max-450:grid-cols-1 w-full px-[30px] pb-[30px] gap-[30px]'>
            <FeedbackBox like={true}/>
            <FeedbackBox like={true}/>
            <FeedbackBox like={false}/>
            <ReviewSkeleton/>
        </div>
    </>
  )
}

export default FeedBack