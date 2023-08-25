import Avatar from "@/components/UI & Layout/Avatar"

const Friend = () => {
  return (
    <div className="flex items-center gap-[15px] p-[15px] rounded-xl bg-primary-lighter w-full">
        <Avatar
            backgroundColor='#09071d'
            width="45"
            height="45"
            iconHeight="25"
            iconWidth="25"
        />

        <p className="text-white text-[16px] font-medium line-clamp-1">
            emircanny
        </p>
    </div>
  )
}

export default Friend