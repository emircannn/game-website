import { AiFillEdit } from "react-icons/ai"
import StyledRating from "../../MaterialUI/StyledRating"
import ReviewPopUp from "./components/ReviewPopUp"
import Button from "@/components/UI & Layout/Form/Button"
import { useState } from "react"


const SetReview = ({width, height, data}) => {

  const [show, setShow] = useState(false)

  return (
    <>
    <div className="mb-[30px] p-[30px] w-full rounded-xl bg-primary-lighter align-cntr flex-col">
        <div className="flex items-center justify-center">
            <span className="text-[18px] font-semibold text-white mr-[12px] mb-[8px]">{data?.rating.toFixed(2)}</span>
            <StyledRating
              value={data?.rating}
            />
        </div>
        <span className="text-secondary-light">{data?.reviews.length} Değerlendirme</span>

        <Button
        title='Değerlendirme Bırak'
        iconRight={<AiFillEdit size={18}/>}
        textSize='14px'
        onClick={() => setShow(true)}
        />
    </div>
    
    {show && 
    <ReviewPopUp 
    width={width}
    height={height}
    setShow={setShow} 
    show={show}
    game={data?._id}
    />}
    </>
  )
}

export default SetReview