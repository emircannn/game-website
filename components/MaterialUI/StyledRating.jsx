import { Rating } from "@mui/material"
import Heart from '../../public/icons/heartfill.svg' 
import EmptyHeart from '../../public/icons/heart.svg' 
import tailwindConfig from "@/tailwind.config"

const StyledRating = ({
  value= 4,
  gap= 1,
  size='25'
}) => {
  return (
        <Rating 
        name="read-only" 
        value={value} 
        readOnly
        sx={{ gap }}
        icon={<Heart height={size} width={size}/>} 
        emptyIcon={<EmptyHeart fill={tailwindConfig.theme.extend.colors.secondary} height={size} width={size}/>}/>
  )
}

export default StyledRating