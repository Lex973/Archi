import { Paper, Stack, Box, Typography, Avatar } from "@mui/material";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface trendingItemProps {
    coinName: string;
    coinSymbol: string;
    coinMarketCap: number | string;
    coinPrice: number | string;
    coinChange24: number;
    coinAvatarUrl: string;
}
const TrendingItem = ({coinName, coinSymbol, coinMarketCap, coinPrice, coinChange24, coinAvatarUrl}: trendingItemProps) => {
    const isMinus = coinChange24 > 0
    const formattedCoinChanged24 = `${(coinChange24 ?? 0).toFixed(1)}% in 24h`

    return (
        <Paper sx={{
            px: 2,
            py: 1.5,
            backgroundColor: 'white',
            borderRadius: 2.5,
            boxShadow: 'none',
            transition: 'box-shadow 0.2s ease',
            '&:hover': {
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            },
            width: '100%'
        }}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">

                <Stack direction="row" alignItems="center" gap={1.5}>
                    <Avatar src={coinAvatarUrl} sx={{ width: 32, height: 32, backgroundColor: 'success.light', fontSize: 16 }}/>
                    <Box>
                        <Typography fontWeight={600} fontSize={16}>{coinName}</Typography>
                        <Typography fontSize={13} color="text.secondary">{coinSymbol} • {coinMarketCap} market cap</Typography>
                    </Box>
                </Stack>

                <Box textAlign="right">
                    <Typography fontWeight={600} fontSize={16}>${coinPrice}</Typography>

                    <Typography
                        fontSize={13}
                        color={`${isMinus ? 'success.main' : 'error.main'}`}
                        fontWeight={500}
                        sx={{display: 'flex', alignItems: 'center'}}
                    >
                        {isMinus ? <ArrowDropUpIcon/> : <ArrowDropDownIcon/>}
                        {formattedCoinChanged24}
                    </Typography>
                </Box>

            </Stack>
        </Paper>
    );
};

export default TrendingItem;