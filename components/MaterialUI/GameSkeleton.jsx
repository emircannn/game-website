import { createTheme, Skeleton } from '@mui/material'
const GameSkeleton = () => {

    const theme = createTheme({
        palette: {
          customColor: {
            main: '#b6b6f880 ',
          },
        },
      });
    

  return (
    <div className='flex flex-col gap-[8px]'>
        <Skeleton variant="rounded"  
          animation='wave'
          sx={{ bgcolor: theme.palette.customColor.main,
        width : '100%', 
        height: {
            xl: '214px',
            lg: '195px',
            md: '132px',
            sm: '171px',
            xs: '118px'
        },
        borderRadius: '12px' }}/>

    <div className='flex items-center justify-between'>
    <Skeleton variant="text" 
    sx={{ fontSize: '12px', 
    borderRadius: '16px',  
    width: '35%',
    bgcolor: theme.palette.customColor.main }} />

    <Skeleton variant="text" 
    sx={{ fontSize: '12px', 
    borderRadius: '16px',  
    width: '35%',
    bgcolor: theme.palette.customColor.main }} />

    </div>
    </div>
  )
}

export default GameSkeleton