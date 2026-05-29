// trendingCoins
export type trendingCoinsResponseData = {
    market_cap: string,
    market_cap_btc: string,
    price: number,
    price_btc: string,
    sparkline: string,
    total_volume: string,
    total_volume_btc: string,
    price_change_percentage_24h: {
        usd: number
    }
}
export type trendingCoinsResponseItem = {
    coin_id: number;
    data: trendingCoinsResponseData;
    id: string;
    large: string;
    market_cap_rank: number;
    name: string;
    price_btc: number;
    score: number;
    slug: string;
    small: string;
    symbol: string;
    thumb: string;
}
export type trendingCoinsResponseCoins = {
    item: trendingCoinsResponseItem;
}
export type trendingCoinsResponse = {
    coins: trendingCoinsResponseCoins[];
}


// globalMarketStatistics
export type marketCapPercentage = {
    bnb: number;
    btc: number;
    eth: number;
    figr_heloc: number;
    sol: number;
    steth: number;
    trx: number;
    usdc: number;
    usdt: number;
    xrp: number;
}
export type totalVolume = {
    usd: number;
}
export type totalMarketCap = {
    usd: number;
}
export type globalMarketStatistics = {
    active_cryptocurrencies: number;
    ended_icos: number;
    market_cap_change_percentage_24h_usd: number;
    markets: number;
    ongoing_icos: number;
    total_market_cap: totalMarketCap;
    total_volume: totalVolume;
    market_cap_percentage: marketCapPercentage;
    upcoming_icos: number;
    updated_at: number;
    volume_change_percentage_24h_usd: number;
}
export type globalMarketStatisticsResponse = {
    data: globalMarketStatistics,
}


// news
export type newsApiSource = {
    id: string;
    name: string;
}
export type newsApiData = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: newsApiSource;
    title: string;
    url: string;
    urlToImage: string;
}
export type newsApiResponse = {
    articles: newsApiData[];
}

// таблица    
export interface CoinsData {
  id: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h: number;
  name: string;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
  market_cap_rank: number;
  symbol: string;
  sparkline_in_7d: {price: number[]};
  image: string
}

export interface HeadCellInterface{
  name: string;
  id: keyof CoinsData;
  sortable?: boolean;
  align: 'center'| 'left'| 'right'
}


// topGainers
export interface TopGainersResponse {
    name: string;
    symbol: string;
    image: string;
    market_cap: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
}


// hover tooltip
interface HoverElementData {
    name: string;
    image: string;
    symbol: string;
    marketCap: number;
    procent: number;
    isPositive: boolean;
}

// heatmap custom component
export interface CustomContentProps {
    x: number;
    y: number;
    width: number;
    height: number;
    name: string;
    percentage: number;
    size: number;
    symbol: string;
    image: string;
    marketCap: number;
    fill: string;
    setHoverElementData: (data: HoverElementData) => void;
}