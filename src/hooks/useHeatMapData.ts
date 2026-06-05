import {useGetTopGainersQuery} from "../store/cryptoApiSlice";
import {useMemo} from "react";

const UseHeatMapData = () => {
    const {data} = useGetTopGainersQuery()

    return useMemo(() => {
        if (!data) return [];
        const red = 'rgb(255, 58, 51)';
        const green = 'rgb(0, 168, 62)';

        console.log(data)
        return data?.map(coin => {
            return {
                name: coin.name,
                symbol: coin.symbol,
                image: coin.image,
                marketCap: coin.market_cap,
                size: Math.round(Math.sqrt(coin.market_cap)),
                fill: coin.price_change_24h > 0 ? green : red,
                percentage: coin.price_change_percentage_24h
            }
        })
    }, [data])
};

export default UseHeatMapData;