/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const Description = ({showMore, setShowMore, routeAbout, data}) => {
  const htmlString = data?.desc
  return (
    <div id={routeAbout} onClick={() => setShowMore(!showMore)} className={`flex cursor-pointer flex-col gap-[30px] 
    ${!showMore && 'max-h-[250px] overflow-hidden'} duration-300  relative text-white`}>
        <div className='text-[13px] 768:text-[14px]' dangerouslySetInnerHTML={{ __html: htmlString }} />

        <div className={`${!showMore && 'opacity-gradient h-[100px] absolute'}   bottom-0 left-0 w-full  flex items-center justify-center`}>
                <button onClick={() => setShowMore(!showMore)} className={`bg-secondary ${!showMore && 'mt-[20px]'} text-white p-[16px] rounded-full`}>
                    {!showMore ? <AiOutlinePlus size={20}/> : <AiOutlineMinus size={20}/>}
                </button>
        </div>
    </div>
  )
}

export default Description