import SetRating from "@/components/MaterialUI/SetRating";
import Avatar from "@/components/UI & Layout/Avatar"
import Button from "@/components/UI & Layout/Form/Button";
import Textarea from "@/components/UI & Layout/Form/Textarea";
import { UserContext } from "@/context/userContext";
import tailwindConfig from "@/tailwind.config"
import { useContext, useState } from "react";
import { CgClose } from "react-icons/cg";

const ReviewPopUp = ({setShow, width, height}) => {
    const [value, setValue] = useState(2);
    const [text, setText] = useState('');

    const {user} = useContext(UserContext)

    const minLength = 60;
    const remainingChars = 0 + text.length;

    function handleChange(event) {
        if (event.target.value.length <= minLength) {
          setText(event.target.value);
        }
      }

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[99]">

        <div className="w-full h-full bg-primary-dark/75 align-cntr px-[10px]">
            <div className=" bg-primary-lighter rounded-xl p-[30px] relative">

                {/* Wrapper */}
                <div className="align-cntr flex-col gap-[30px]">
                <Avatar
                width={width}
                height={height}
                borderRadius="18"
                backgroundColor={tailwindConfig.theme.extend.colors.primary}
                src={user?.image}
                />

                <h4 className="heading">Yorumunuzu yazın</h4>

                <p className="text-secondary-light text-[14px] tracking-wide">
                    Diğer kullanıcılara yol göstermesi açısından bu oyun hakkında kendi düşüncelerinizi yazabilir, beğendiklerinizi ve beğenmediklerinizi söyleyebilirsiniz.
                </p>
                </div>

                <div className="my-[30px] align-cntr">
                    <SetRating 
                    value={value}
                    setValue={setValue}
                    iconHeight="30"
                    iconWidth="30"
                    />
                </div>

                <div className="mt-[30px] w-full">
                    <Textarea
                    remainingChars={remainingChars}
                    minLength={minLength}
                    minLengthBoolean={true}
                    onChange={handleChange}
                    placeholder='Bir şeyler yaz...'
                    fontSize="16"
                    />
                </div>

                <div className="w-full">
                <Button
                title='Değerlendir'
                wfull={true}
                disabled={remainingChars < minLength }
                />
                </div>

                <button onClick={() => setShow(false)} className="absolute top-4 right-4">
                    <CgClose size={30} className="text-graident hover:text-secondary duration-300 hover:rotate-90"/>
                </button>

            </div>
        </div>

    </div>
  )
}

export default ReviewPopUp