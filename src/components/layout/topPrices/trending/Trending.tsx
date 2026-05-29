import {List, ListItem, Paper, Typography} from "@mui/material";
import TrendingItem from "./TrendingItem.tsx";
import {useGetTrendingCoinsQuery} from "../../../../store/cryptoApiSlice.ts";

const Trending = () => {
    const {data, isLoading} = useGetTrendingCoinsQuery()
    const trendingCoins = data?.coins?.slice(0, 3)?.map(coin => coin.item)

    if (isLoading) return null;
    return (
        <Paper sx={{ px: 2, py: 2, width: '49%', borderRadius: 4, boxShadow: 'none', border: '1px solid rgba(17, 24, 39, 0.08)' }}>
            <Typography sx={{fontWeight: 'bold', mb: 2}}>
                🔥 Trending
            </Typography>

            <List sx={{m: 0, p: 0}}>
                {trendingCoins?.map(coin => (
                    <ListItem key={coin.coin_id} sx={{m: 0, p: 0, pb: 2}}>
                        <TrendingItem
                            coinName={coin.slug}
                            coinSymbol={coin.symbol}
                            coinMarketCap={coin.data.market_cap}
                            coinPrice={coin.data.price.toFixed(6)}
                            coinChange24={coin?.data?.price_change_percentage_24h?.usd}
                            coinAvatarUrl={coin.large}
                        />
                    </ListItem>
                ))}
            </List>
        </Paper>
    );
};

export default Trending;