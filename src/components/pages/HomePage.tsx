import Header from "../layout/header/Header.tsx";
import {Box} from "@mui/material";
import TopPricesSection from "../layout/topPrices/TopPricesSection.tsx";
import LatestNews from "../layout/news/LatestNews.tsx";
import CoinsTable from "../coinsTable/CoinsTable.tsx";
import HeatMap from "../layout/heatmap/HeatMap.tsx";

const HomePage = () => {
    return (
        <Box>
            <Header/>
            <TopPricesSection/>
            <CoinsTable/>
            <LatestNews maxPages={2}/>
            <HeatMap/>
        </Box>
    );
};

export default HomePage;