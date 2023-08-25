import CupICon from '@/public/icons/cup.svg';

const Cup = () => {
  return (
    <div className="col-span-4 450:col-span-1 w-full h-[250px] bg-primary-light rounded-xl flex items-center justify-center flex-col gap-[20px]">
            <CupICon width='40' height='40'/>

            <div className="w-1/2 h-[2px] rounded-full bg-secondary-light"/>

            <span className="text-[18px] text-white">Seviye 11</span>
        </div>
  )
}

export default Cup