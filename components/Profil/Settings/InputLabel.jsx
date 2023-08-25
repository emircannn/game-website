import Input from "@/components/UI & Layout/Form/Input"

const InputLabel = ({
    label='Steam',
    placeholder='https://steamcommunity.com/id/...',
    type='text'
}) => {
  return (
    <div className="flex flex-col gap-[10px]">
            <h5 className="text-[16px] font-semibold text-white">
                {label}
            </h5>
            <div className="w-[350px] max-768:w-full">
            <Input height='55' width='100%' placeholder={placeholder} type={type}/>
        </div>
    </div>
  )
}

export default InputLabel