import Horizontal from "../GameBox/Horizontal"

const Wishlist = () => {
  return (
    <div className="my-[30px] grid grid-cols-1 450:grid-cols-2 768:grid-cols-3 gap-[10px] 450:gap-[20px]">
        <Horizontal
            wishlist
        />
        <Horizontal
            wishlist
        />
        <Horizontal
            wishlist
        />
        <Horizontal
            wishlist
        />
    </div>
  )
}

export default Wishlist