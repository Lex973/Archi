import {Box, useTheme, Container, Avatar, Stack, Typography, Button} from "@mui/material";
import MarketBar from "./MarketBar.tsx";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import HeaderButtons from "./HeaderButtons.tsx";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import MarketBarSkeleton from "./MarketBarSkeleton.tsx";
import UseMarketBarData from "../../../hooks/useMarketBarData.ts";
import {Link} from "react-router-dom";

const Header = () => {
    const theme = useTheme();
    const { data, loading } = UseMarketBarData();

    return (
        <Box sx={{backgroundColor: 'white'}}>
            <Box sx={{borderBottom: '1px solid rgb(67,67,67)'}}>
                {loading ? <MarketBarSkeleton/> : <MarketBar data={data}/>}
            </Box>

            <Container maxWidth='xl' disableGutters sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1.5, pb: 1.5}}>
                <Stack direction='row' spacing={2} sx={{alignItems: 'center'}}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            bgcolor: "primary.main",
                            width: 34,
                            height: 34,
                            color: "common.white",
                            borderRadius: 2.5,
                        }}
                    >
                        <AutoGraphRoundedIcon sx={{ fontSize: 19 }} />
                    </Avatar>

                    <Box>
                        <Typography sx={{fontWeight: 'bold'}}>
                            Archi Markets
                        </Typography>

                        <Typography sx={{fontSize: 12, color: theme.palette.text.secondary}}>
                            Clean crypto intelligence
                        </Typography>
                    </Box>
                </Stack>

                <HeaderButtons/>


                <Box sx={{display: 'flex', gap: 1}}>
                    <Link to='/register'>
                        <Button
                            startIcon={<ArrowOutwardIcon/>}
                            variant="contained"
                            sx={{
                                color: 'black',
                                backgroundColor: 'rgba(20, 184, 166, 0.14)',
                                border: '1px solid rgba(20, 184, 166, 0.28)',
                                borderRadius: 2,
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: 'none',
                                    boxShadow: 1,
                                },
                                textTransform: 'none'
                            }}
                        >
                            Sign up</Button>
                    </Link>


                    <Button
                        variant="contained"
                        sx={{
                            color: 'black',
                            backgroundColor: 'rgba(20, 184, 166, 0.14)',
                            border: '1px solid rgba(20, 184, 166, 0.28)',
                            borderRadius: 2,
                            boxShadow: 'none',
                            '&:hover': {
                                backgroundColor: 'none',
                                boxShadow: 1,
                            },
                            textTransform: 'none'
                        }}
                    >
                        Sign in</Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Header;