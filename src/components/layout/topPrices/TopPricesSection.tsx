import {Paper, Typography, Container, useTheme, Stack} from "@mui/material";
import Trending from "./trending/Trending.tsx";
import GlobalStat from "./globalStat/GlobalStat.tsx";
import {useGetGlobalStatisticsQuery} from "../../../store/cryptoApiSlice.ts";
import TrendingVolume from "./trendingVolume/TrendingVolume.tsx";
import GlobalStatSkeleton from "./globalStat/GlobalStatSkeleton.tsx";
import TrendingSkeleton from "./trending/TrendingSkeleton.tsx";

const TopPricesSection = () => {
    const theme = useTheme();

    const {data, isLoading} = useGetGlobalStatisticsQuery(undefined, {pollingInterval: 60000})

    const marketCap24h = data?.data?.market_cap_change_percentage_24h_usd;
    const price = data?.data?.total_market_cap?.usd;

    const volume = data?.data?.total_volume?.usd;
    return (
        <Container maxWidth='xl' disableGutters sx={{ mt: 5 }}>
            <Paper sx={{ px: 2, py: 3, backgroundColor: 'white', borderRadius: 2.5 }}>
                <Typography variant='h5' sx={{fontWeight: 'bold'}}>
                    Today's cryptocurrency prices
                </Typography>

                <Typography sx={{ mt: 2, mb: 2, color: theme.palette.text.secondary}}>
                    A quick view of the strongest 24h performers and the coins with the biggest watchlists.
                </Typography>

                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Stack sx={{width: '49%', height: '339px'}} gap={1}>
                        {isLoading ? <GlobalStatSkeleton/> : <GlobalStat marketCap24h={marketCap24h ?? 0} price={price ?? 0}/>}

                        {isLoading ? <GlobalStatSkeleton/> : <TrendingVolume volume={volume}/>}
                    </Stack>

                    {isLoading ? <TrendingSkeleton/> : <Trending/>}
                </Stack>
            </Paper>
        </Container>
    );
};

export default TopPricesSection;