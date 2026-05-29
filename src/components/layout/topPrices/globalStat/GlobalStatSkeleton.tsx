import { Paper, Box, Skeleton } from "@mui/material";

const GlobalStatSkeleton = () => {
    return (
        <Paper
            sx={{
                px: 2,
                py: 2,
                borderRadius: 4,
                boxShadow: 'none',
                border: '1px solid rgba(17, 24, 39, 0.08)',
                height: '49%'
            }}
        >
            <Skeleton variant="text" width={180} height={50} sx={{ mb: 2 }} />

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Skeleton variant="text" width={120} height={30} />

                <Skeleton variant="text" width={80} height={30} />
            </Box>
        </Paper>
    );
};

export default GlobalStatSkeleton;