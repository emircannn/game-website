import { BsBasketFill } from "react-icons/bs"
import Button from "../UI & Layout/Form/Button"
import { useRouter } from "next/router"

const EmptyCart = () => {

    const {push} = useRouter()

  return (
    <div className="w-full aspect-[2/1] rounded-xl bg-primary-lighter p-[15px] flex flex-col justify-center gap-[15px] items-center">
        <BsBasketFill size={32} className="text-graident-dark"/>

        <p className="text-white text-2xl">
            Sepetiniz boş
        </p>
        <p className="text-secondary text-center">
            Sepete henüz oyun eklemediniz. Oyun keşfetmek için sitemize göz atın.
        </p>

        <Button
            height='h-[45px]'
            title='Oyun keşfet'
            onClick={() => push('/ara')}
        />
    </div>
  )
}

export default EmptyCart