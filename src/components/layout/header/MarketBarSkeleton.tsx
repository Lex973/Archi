import {Box, Container, Skeleton, Stack, Typography, useTheme} from "@mui/material";

const localData = [
    { label: 'Coins', value: ``, width: 138},
    { label: 'Exchanges', value: ``, width: 44 },
    { label: 'Market Cap', value: ``, width: 120 },
    { label: '24h Volume', value: ``, width: 113 },
    { label: 'Dominance', value: ``, width: 270},
]

const MarketBarSkeleton = () => {
    const theme = useTheme()

    return (
        <Container maxWidth='xl' disableGutters>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center', py: 1.5}}>
                {localData.map((item) => {
                    return <Box sx={{display: 'flex', gap: 1}} key={item.label}>
                        <Typography sx={{ color: theme.palette.text.secondary }}>{item.label}: </Typography>
                        <Skeleton component='text' width={item.width}>{item.value}</Skeleton>
                    </Box>
                })}
            </Stack>
        </Container>
    );
};

export default MarketBarSkeleton;