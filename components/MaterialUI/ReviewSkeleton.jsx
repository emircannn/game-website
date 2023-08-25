import { createTheme, Skeleton } from "@mui/material";

const ReviewSkeleton = () => {

    
    const theme = createTheme({
        palette: {
          customColor: {
            main: '#b6b6f880',
          },
        },
      });

  return (
    <div className=" rounded-xl h-full flex flex-col">
        <Skeleton variant="rounded"  
    animation='wave'
    sx={{ bgcolor: theme.palette.customColor.main,
        width : '100%', 
        height: '53%' ,
        borderRadius: '16px'}}/>

        <div className="my-[20px] align-cntr gap-[10px]">
        <Skeleton variant="rounded" 
        sx={{ bgcolor: theme.palette.customColor.main,
        width : '60px', 
        height: '60px' }}/>
        
        <Skeleton variant="circular"  
        sx={{ bgcolor: theme.palette.customColor.main,
        width : '60px', 
        height: '60px' }}/>
        </div>

        <div className="flex items-start justify-center !flex-col gap-[8px]">
        <Skeleton variant="text" 
        sx={{ fontSize: '12px', 
        borderRadius: '16px',  
        width: '100%',
        bgcolor: theme.palette.customColor.main }} />
        <Skeleton variant="text" 
        sx={{ fontSize: '12px', 
        borderRadius: '16px',  
        width: '90%',
        bgcolor: theme.palette.customColor.main }} />
        <Skeleton variant="text" 
        sx={{ fontSize: '12px', 
        borderRadius: '16px',  
        width: '85%',
        bgcolor: theme.palette.customColor.main }} />
        <Skeleton variant="text" 
        sx={{ fontSize: '12px', 
        borderRadius: '16px',  
        width: '80%',
        bgcolor: theme.palette.customColor.main }} />
        </div>
    </div>
  )
}

export default ReviewSkeleton