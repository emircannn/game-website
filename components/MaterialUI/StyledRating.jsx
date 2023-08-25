import { Rating } from "@mui/material"
import Heart from '../../public/icons/heartfill.svg' 
import EmptyHeart from '../../public/icons/heart.svg' 
import tailwindConfig from "@/tailwind.config"

const StyledRating = () => {
  return (
    <div>
        <Rating 
        name="read-only" 
        value={4} 
        readOnly
        sx={{ gap: 1 }}
        icon={<Heart height='20' width='20'/>} 
        emptyIcon={<EmptyHeart fill={tailwindConfig.theme.extend.colors.secondary} height='20' width='20'/>}/>
    </div>
  )
}

export default StyledRating