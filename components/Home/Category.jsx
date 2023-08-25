import React from 'react'
import StrategyBox from '../GameBox/StrategyBox'

const Category = () => {
  return (
    <section className='w-full bg-gradient-to-bl from-primary-light via-section to-primary mt-[30px]'>
       <div className='container py-[20px]'>
       <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Kategoriler</h2>

        <button className='button'>Hepsini Gör</button>
        </div>

        <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2'>
            <StrategyBox/>
            <StrategyBox/>
            <StrategyBox/>
            <StrategyBox/>
            <StrategyBox/>
            <StrategyBox/>
        </div>
       </div>
    </section>
  )
}

export default Category