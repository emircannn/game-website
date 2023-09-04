import CartItem from "./CartItem"
import EmptyCart from "./EmptyCart"
import WishlistItem from "./WishlistItem"

const CartWrapper = ({
  data,
  wishlist,
  user,
  setData,
  setWishlist
}) => {

  return (
    <div className="flex flex-col gap-[20px] w-full max-w-[740px]">
    <h5 className="text-[16px] font-medium text-white ">
        Sepet
    </h5>
        <div className="flex flex-col gap-[15px] min-w-full">
            {data && data?.game?.length > 0 ?
              data.game.map((item, i) => (
                <CartItem
                  key={i}
                  data={item}
                  user={user}
                  setData={setData}
                  setWishlist={setWishlist}
                  wishlist={wishlist}
                />
              ))
              :
              <EmptyCart/>
              }
        </div>

        <h5 className="text-[16px] font-medium text-white mt-[15px]">
        İstek Listesi
        </h5>

        <div className="flex flex-col gap-[10px] min-w-full">
            {wishlist ? 
            wishlist?.length > 0 ? 
            wishlist.map((item, i) => (
              <WishlistItem
                key={i}
                cart={data}
                data={item}
                user={user}
                setData={setData}
                setWishlist={setWishlist}
              />
            )) : 
            <div className="text-[14px] font-semibold text-white">
              İstek Listeniz Boş...
            </div>
            :
            <div className="text-[14px] font-semibold text-white">
              Oturum Açın...
            </div>
            }
        </div>
    </div>
  )
}

export default CartWrapper