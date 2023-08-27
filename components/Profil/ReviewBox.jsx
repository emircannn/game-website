import React from 'react'
import StyledRating from '../MaterialUI/StyledRating'
import Avatar from '../UI & Layout/Avatar'
import Image from 'next/image'
import { BsTrash3Fill } from 'react-icons/bs'
import { dateFormater } from '@/utils/helper'

const ReviewBox = ({
    data,
    handleDelete
}) => {
    const date = dateFormater(data?.createdAt)

  return (
    <div className='w-full rounded-xl aspect-square bg-primary-lighter overflow-hidden'>
                <div className='w-full h-[25%] relative'>
                    <Image src={data?.game?.coverImage} alt='' fill className='object-cover object-top'/>

                    <div className='w-full flex items-center justify-center absolute -bottom-[30px]'>
                    <Avatar
                        width='60'
                        height='60'
                        iconWidth='30'
                        iconHeight='30'
                        backgroundColor='#09071d'
                        src={data?.user?.image}
                    />
                    </div>
                </div>

                <div className='w-full h-[75%] p-[15px] pt-[40px] flex flex-col justify-between'>
                    <div className='w-full h-[250px] overflow-y-auto flex flex-col'>
                        <div className='text-[14px] text-white font-semibold flex items-center flex-col justify-center shrink-0'>
                            <span>{data?.game?.name}</span>
                            <StyledRating
                                value={data?.rate}
                                size='18'
                                gap={0.5}
                            />
                        </div>

                        <div className='w-full h-full text-[13px] font-medium text-secondary p-[10px]'>
                            {data?.review}
                        </div>
                    </div>

                    <div className="pt-[20px] border-t border-secondary-light flex items-center justify-between shrink-0">
                    <span className="text-secondary-light font-semibold text-[13px]">{date}</span>

                    <button 
                    onClick={handleDelete}
                    className="flex items-center gap-[12px] text-secondary border-secondary
                    border px-[24px] py-[8px] text-[14px] rounded-full hover:bg-primary-dark duration-300">
                    Sil
                    <BsTrash3Fill className="text-secondary"/>
                    </button>
                    </div>
                  </div>
                </div>
  )
}

export default ReviewBox