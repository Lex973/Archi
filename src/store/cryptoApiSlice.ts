import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {globalMarketStatisticsResponse, trendingCoinsResponse, CoinsData, TopGainersResponse} from "../types.ts";

// получение крипты

const BASE_URL = 'https://api.coingecko.com/api/v3';
const coinGeckoApiKey = 'CG-Z9xypsnGsX2kDZ5dE7dXzRPm';

export const fetchApi = createApi({
    reducerPath: 'CoinGeckoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Accept', 'application/json');
            headers.set('x-cg-demo-api-key', coinGeckoApiKey);
        }
    }),
    endpoints: (builder) => ({
        getTrendingCoins: builder.query<trendingCoinsResponse, void>({
            query: () => '/search/trending'
        }),
        getGlobalStatistics: builder.query<globalMarketStatisticsResponse, void>({
            query: () => '/global',
        }),
        getCoinsList: builder.query<{coins: CoinsData[], totalPages: number}, {page: number}>({
            query: ({page}) => `/coins/markets?vs_currency=usd&price_change_percentage=1h%2C7d&precision=2&sparkline=true&page=${page}`,
            transformResponse: (response: CoinsData[], meta) =>{
                const totalPages = meta?.response?.headers.get('total');
                return {coins: response, totalPages: Number(totalPages) }
            }
        }),
        getTopGainers: builder.query<TopGainersResponse[], void>({
            query: () => '/coins/markets?vs_currency=usd&order=price_change_percentage_24h_desc&per_page=10&page=1'
        })
    })
})

export const {
    useGetTrendingCoinsQuery,
    useGetGlobalStatisticsQuery,
    useGetCoinsListQuery,
    useGetTopGainersQuery,
} = fetchApi;