import { Paper, Typography, Box, useTheme} from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface globalStatProps {
    marketCap24h: number;
    price: number;
}
const GlobalStat = ({marketCap24h, price}: globalStatProps) => {
    const theme = useTheme()
    const formatted = `${marketCap24h > 0 ? '+' : ''}${(marketCap24h ?? 0).toFixed(2)}%`

    return (
        <Paper sx={{ px: 2, py: 2, borderRadius: 4, boxShadow: 'none', border: '1px solid rgba(17, 24, 39, 0.08)', height: '49%' }}>
            <Typography sx={{fontWeight: 'bold', mb: 2}} variant='h4'>
                ${price?.toLocaleString('en-US', { maximumFractionDigits: 0 })}
            </Typography>

            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Typography sx={{fontSize: 20}} color={theme.palette.text.secondary}>
                    Market Cap
                </Typography>

                <Typography sx={{display: 'flex', alignItems: 'center',}} color={`${marketCap24h < 0 ? 'error.main' : 'success.main'}`}>
                    {marketCap24h < 0 ? <ArrowDropDownIcon/> : <ArrowDropUpIcon/>} {formatted}
                </Typography>
            </Box>
        </Paper>
    );
};

export default GlobalStat;