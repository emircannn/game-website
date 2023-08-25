import React from 'react'
import BestReviews from '../OyunSayfasi/Reviews/components/BestReviews'
import RecentReviews from '../OyunSayfasi/Reviews/components/RecentReviews'

const Reviews = () => {
  return (
    <>
        <div className='grid grid-cols-2 gap-[20px] w-full max-768:hidden my-[30px]'>
                <BestReviews
                  profile
                />
        </div>

        <div className='grid grid-cols-1 gap-[20px] w-full 768:hidden my-[30px]'>
                <RecentReviews
                  profile
                />
            </div>
    </>
  )
}

export default Reviews