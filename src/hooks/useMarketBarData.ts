import {bubbleSortWithDoubleArray, formatMarketCap, formatVolume} from "../utils/utilsFunc.ts";
import {useGetGlobalStatisticsQuery} from "../store/cryptoApiSlice.ts";

const UseMarketBarData = () => {
    const { data, isLoading } = useGetGlobalStatisticsQuery();

    if (!data) {
        return {
            loading: isLoading,
            data: []
        };
    }

    const coins = data.data.active_cryptocurrencies;

    const coinsFormatted = coins.toLocaleString('en-US');

    const marketCap = data.data.total_market_cap.usd;

    const marketCap24h = data.data.market_cap_change_percentage_24h_usd;

    const formattedMarketCap =
        `${(marketCap24h ?? 0) > 0 ? '+' : ''}${(marketCap24h ?? 0).toFixed(2)}%`;

    const totalVolume24 = data.data.volume_change_percentage_24h_usd;

    const totalVolume24Formatted = `${totalVolume24.toFixed(2)}%`;

    const market_cap_percentageArray = Object.entries(data.data.market_cap_percentage);

    const market_cap_percentageArrayFilter =
        bubbleSortWithDoubleArray(market_cap_percentageArray).slice(0, 3);

    return {
        loading: isLoading,
        data: [
            { label: 'Coins', value: coinsFormatted, hint: `${data.data.ongoing_icos} ongoing` },
            { label: 'Exchanges', value: `${data.data.markets}` },
            { label: 'Market Cap', value: `$${formatMarketCap(marketCap)}`, hint: formattedMarketCap, isRed: marketCap24h < 0 },
            { label: '24h Volume', value: `${formatVolume(data.data.total_volume.usd)}`, hint: totalVolume24Formatted, isRed: totalVolume24 < 0 },
            {
                label: 'Dominance',
                value: market_cap_percentageArrayFilter
                    .map(([coin, val]) => `${coin.toUpperCase()} ${val.toFixed(1)}%`)
                    .join('   ')
            },
        ]
    };
};

export default UseMarketBarData;