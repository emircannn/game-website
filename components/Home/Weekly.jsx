import WeeklyBox from '../GameBox/WeeklyBox'

const Weekly = () => {
  return (
    <div>
        <div className='w-full flex items-center justify-between'>
        <h2 className='heading'>Haftalık Fırsatlar</h2>

        {/* <button className='button'>Hepsini Gör</button> */}
        </div>

        <div className='mt-[30px] grid gap-[10px] 1140:gap-[30px] grid-cols-3 max-768:grid-cols-2'>
           <WeeklyBox/>
           <WeeklyBox/>
           <WeeklyBox/>
        </div>
    </div>
  )
}

export default Weekly