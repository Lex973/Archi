import {Paper, Typography, Container, Grid, Box, Button, useTheme} from "@mui/material";
import {useGetLatestNewsInfiniteQuery} from "../../../store/newsApiSlice.ts"
import NewsCard from "./NewsCard.tsx";
import {createSkeletonArray, formatDate} from "../../../utils/utilsFunc.ts";
import NewsFilters from "./NewsFilters.tsx";
import {useSelector} from "react-redux";
import {
    selectLanguageNews,
    selectSearchQueryNews,
    selectSortByNews
} from "../../../store/newsSlice.ts";
import NewsCardSkeleton from "./NewsCardSkeleton.tsx";
import {useState} from "react";
import {Link} from 'react-router-dom';

interface latestNewsProps {
    maxPages: number;
}

const LatestNews = ({maxPages}: latestNewsProps) => {
    const searchQuery = useSelector(selectSearchQueryNews)
    const sortByNews = useSelector(selectSortByNews)
    const languageNews = useSelector(selectLanguageNews)
    const theme = useTheme()

    const [isNewPageFetching, setIsNewPageFetching] = useState(false)
    const [isMaxPages, setIsMaxPages] = useState(false)

    const skeletonNews = createSkeletonArray(9, (i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <NewsCardSkeleton/>
        </Grid>
    ))
    const secondSkeletonNews = createSkeletonArray(8, (i) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
            <NewsCardSkeleton/>
        </Grid>
    ))


    const { data, isLoading, isFetching, fetchNextPage } = useGetLatestNewsInfiniteQuery({searchQuery, sortByNews, languageNews, pageSize: 8})
    if (!data) return null


    const newsData = data?.pages.flatMap(item => item.articles)

    const renderNews = newsData?.map(news => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={news.url}>
            <NewsCard
                author={news.author}
                imageURL={news.urlToImage}
                title={news.title}
                label={news.source.name}
                date={formatDate(news.publishedAt)}
                description={news.description}
                newsURL={news.url}
            />
        </Grid>
    ))


    const handleClick = async () => {
        if (data?.pageParams.at(-1) === maxPages - 1) {
            setIsMaxPages(true)
        }
        if (data?.pageParams.at(-1) === maxPages) {
            return
        }
        setIsNewPageFetching(true)

        await fetchNextPage()

        setIsNewPageFetching(false)
    }
    return (
        <Container maxWidth='xl' disableGutters sx={{ mt: 5 }}>
            <Paper sx={{px: 3, py: 3, borderRadius: 2, backgroundColor: 'white'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Typography sx={{fontWeight: 'bold'}} variant='h5'>Latest crypto news</Typography>
                    <NewsFilters/>
                </Box>

                <Grid sx={{ opacity: isLoading ? 0.5 : 1, transition: 'opacity 0.2s ease' }}>
                    <Grid container spacing={2} sx={{mt: 3}}>
                        {isFetching && !isNewPageFetching ? skeletonNews : renderNews}
                        {isFetching && isNewPageFetching ? secondSkeletonNews : null}
                    </Grid>

                </Grid>

                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', my: 4}}>
                    {!isMaxPages
                    ?
                        <Button
                            sx={{
                            backgroundColor: theme.palette.text.primary,
                            color: theme.palette.background.paper,
                            borderRadius: 2,
                            px: 1.5,
                            py: 0.6,
                            fontSize: 14,
                            '&:hover': {
                                backgroundColor: '#64738f'
                            },
                            textTransform: 'none',
                        }}
                        onClick={handleClick}
                        >See more news</Button>
                    : <Link to='/news'>
                            <Button sx={{
                                backgroundColor: theme.palette.text.primary,
                                color: theme.palette.background.paper,
                                borderRadius: 2,
                                px: 1.5,
                                py: 0.6,
                                fontSize: 14,
                                '&:hover': {
                                    backgroundColor: '#64738f'
                                },
                                textTransform: 'none',
                            }}
                                    onClick={handleClick}>See more news</Button>
                        </Link>
                    }
                </Box>
            </Paper>

        </Container>
    );
};

export default LatestNews;