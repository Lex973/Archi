import Header from "../layout/header/Header.tsx";
import {Box} from "@mui/material";
import LatestNews from "../layout/news/LatestNews.tsx";

const NewsPage = () => {
    return (
        <Box>
            <Header/>
            <LatestNews maxPages={15}/>
        </Box>
    );
};

export default NewsPage;