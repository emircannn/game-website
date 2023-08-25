import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import WishlistItem from "./WishlistItem"

const CartWrapper = () => {
  return (
    <div className="flex flex-col gap-[20px] w-full max-w-[740px]">
    <h5 className="text-[16px] font-medium text-white ">
        Sepet
    </h5>
        <div className="flex flex-col gap-[15px] min-w-full">
            <CartItem/>

            <EmptyCart/>
        </div>

        <h5 className="text-[16px] font-medium text-white mt-[15px]">
        İstek Listesi
        </h5>

        <div className="flex flex-col gap-[10px] min-w-full">
            <WishlistItem/>
            <WishlistItem/>
        </div>
    </div>
  )
}

export default CartWrapper