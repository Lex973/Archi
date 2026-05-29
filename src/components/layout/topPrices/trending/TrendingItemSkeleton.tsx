import { Paper, Stack, Box, Skeleton } from "@mui/material";

const TrendingItemSkeleton = () => {
    return (
        <Paper
            sx={{
                px: 2,
                py: 1.5,
                borderRadius: 2.5,
                boxShadow: 'none',
                width: '100%'
            }}
        >
            <Stack direction="row" alignItems="center" justifyContent="space-between">

                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Skeleton variant="circular" width={32} height={32} />

                    <Box>
                        <Skeleton variant="text" width={120} height={20} />
                        <Skeleton variant="text" width={180} height={18} />
                    </Box>
                </Stack>

                <Box textAlign="right">
                    <Skeleton variant="text" width={80} height={20} />
                    <Skeleton variant="text" width={100} height={18} />
                </Box>

            </Stack>
        </Paper>
    );
};

export default TrendingItemSkeleton;