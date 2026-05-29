import {Container, Stack, Typography, Box, useTheme} from "@mui/material";

type MarketBarItem = {
    label: string;
    value: string;
    hint?: string;
    isRed?: boolean;
};
type MarketBarData = {
    data: MarketBarItem[]
}

const MarketBar = ({data}: MarketBarData) => {
    const theme = useTheme()

    return (
        <Container maxWidth='xl' disableGutters>
            <Stack direction='row' spacing={2} sx={{alignItems: 'center', py: 1.5}}>
                {data.map((item) => {
                    return <Box sx={{display: 'flex', gap: 1}} key={item.label}>
                        <Typography sx={{ color: theme.palette.text.secondary }}>{item.label}: </Typography>
                        <Typography>{item.value}</Typography>
                        <Typography sx={{color: item.isRed ? 'error.main' : 'success.main' }}>{item.hint ?? ''}</Typography>
                    </Box>
                })}
            </Stack>
        </Container>
    );
};

export default MarketBar;