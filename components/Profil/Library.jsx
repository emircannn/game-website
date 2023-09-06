import Horizontal from "../GameBox/Horizontal"

const Library = ({
  data,
  user=false
}) => {
  return (
    <>
        {data?.length > 0 ?
        <div className="my-[30px] grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[10px] 450:gap-[20px]">
            {data.map((item, i) => (
                <Horizontal
                key={i}
                data={item}
                />
            ))}
        </div>
        :
        <div className="text-[16px] text-white font-semibold  mt-[40px] flex items-center justify-center min-h-[216px]">
            {user ? 'Kullanıcı henüz bir oyun sahibi değil' : 'Henüz bir oyun sahibi değilsiniz...'}
        </div>
    }
        </>
  )
}

export default Library