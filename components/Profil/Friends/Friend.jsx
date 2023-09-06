import Avatar from "@/components/UI & Layout/Avatar"
import Link from "next/link"

const Friend = ({
  data,
  user
}) => {
  return (
    <div className="flex items-center gap-[15px] p-[15px] rounded-xl bg-primary-lighter w-full">
        <Link href={data?._id === user?._id ? `/profil/${user?.username}` : `/kullanici/${data?.username}`}>
        <Avatar
            backgroundColor='#09071d'
            width="45"
            height="45"
            iconHeight="25"
            iconWidth="25"
            src={data?.image}
        />
        </Link>

        <p className="text-white text-[16px] font-medium line-clamp-1">
            {data?._id === user?._id ? 'Siz' :data?.username}
        </p>
    </div>
  )
}

export default Friend