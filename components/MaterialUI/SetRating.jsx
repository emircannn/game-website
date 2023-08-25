import { Rating } from '@mui/material';
import Heart from '../../public/icons/heartfill.svg' 
import EmptyHeart from '../../public/icons/heart.svg'
import tailwindConfig from '@/tailwind.config';

const SetRating = ({
    setValue, 
    value, 
    iconHeight = '20',
    iconWidth = '20',
    gap = 8
}) => {

  return (
    <Rating
    name="simple-controlled"
    value={value}
    onChange={(event, newValue) => {
      setValue(newValue);
    }}
    sx={{ gap: {gap} }}
    icon={<Heart height={iconHeight} width={iconWidth}/>} 
    emptyIcon={<EmptyHeart fill={tailwindConfig.theme.extend.colors.secondary} height={iconHeight} width={iconWidth}/>}
  />
  )
}

export default SetRating