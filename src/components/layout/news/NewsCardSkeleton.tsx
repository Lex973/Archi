import {Box, Skeleton} from "@mui/material";

const NewsCardSkeleton = () => {
    return (
        <Box sx={{ maxHeight: 500 }}>
            <Skeleton variant='rectangular' height={250}>
            </Skeleton>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, textDecoration: 'none' }}>
                    <Skeleton variant="text" width={100} height={24} sx={{mt: 1}}/>

                    <Skeleton variant="text" width={130} height={20} />

                    <Skeleton variant="text" width='100%' height={30} />

                    <Skeleton variant="text" width='100%' height={90    } />
                </Box>

                <Box sx={{display: 'flex', gap: 1, alignItems: 'center'}}>
                    <Skeleton variant='circular' height={30} width={30}/>
                    <Skeleton variant='text' height={24} width={50}/>
                </Box>
            </Box>


            <Box sx={{width: '100%', height: '2px', backgroundColor: 'rgba(0, 0, 0, 0.1)', mt: 2}}>
            </Box>
        </Box>
    )
}

export default NewsCardSkeleton