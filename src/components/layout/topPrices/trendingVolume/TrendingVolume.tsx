import {Box, Paper, Typography, useTheme} from "@mui/material";


const TrendingVolume = ({volume}: {volume: number | undefined}) => {
    const theme = useTheme()

    return (
        <Paper sx={{ px: 2, py: 2, borderRadius: 4, boxShadow: 'none', border: '1px solid rgba(17, 24, 39, 0.08)', height: '49%' }}>
            <Typography sx={{fontWeight: 'bold', mb: 2}} variant='h4'>
                ${volume?.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{fontSize: 20}} color={theme.palette.text.secondary}>
                    24h Trading Volume
                </Typography>
            </Box>
        </Paper>
    );
};

export default TrendingVolume;