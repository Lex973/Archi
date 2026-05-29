// Converter.tsx
import {Box, Paper, Typography, IconButton, useTheme} from "@mui/material";
import Header from "../layout/header/Header.tsx";
import SwapVertIcon from '@mui/icons-material/SwapVert'
import ConvertorElementFrom from "../convertorElements/ConvertorElementFrom.tsx";
import {selectPage} from "../../store/newsSlice.ts";
import {useGetCoinsListQuery} from "../../store/cryptoApiSlice.ts";
import {useSelector, useDispatch} from "react-redux";
import ConvertorModal from "../convertorElements/ConvertorModal.tsx";
import {
    coinFromID_changed,
    coinToID_changed,
    selectCoinFrom,
    selectCoinTo,
    selectModalIsOpen
} from "../../store/converterSlice.ts";
import {useState} from "react";
import ConvertorElementTo from "../convertorElements/ConvertorElementTo.tsx";
import {validateConverterResult} from "../../utils/utilsFunc.ts";
import AnimatedGlowBackground from "../AnimateGlow.tsx";
import type {AppDispatch} from "../../store/store.ts";

const Converter = () => {
    const currentPage = useSelector(selectPage);
    const {data} = useGetCoinsListQuery({page: currentPage})
    const theme = useTheme()
    const coinFrom = useSelector(selectCoinFrom)
    const coinTo = useSelector(selectCoinTo)
    const modalIsOpen = useSelector(selectModalIsOpen)

    const dispatch = useDispatch<AppDispatch>()

    const [amount, setAmount] = useState(0)

    if (!data) return null;

    const targetCoinFromPrice = data?.coins?.find(coin => coin.id === coinFrom)?.current_price
    const targetCoinToPrice = data?.coins?.find(coin => coin.id === coinTo)?.current_price

    const targetCoinFromSymbol = data?.coins?.find(coin => coin.id === coinFrom)?.symbol.toUpperCase();
    const targetCoinToSymbol = data?.coins?.find(coin => coin.id === coinTo)?.symbol.toUpperCase();


    const result = targetCoinFromPrice && targetCoinToPrice
        ? validateConverterResult((targetCoinFromPrice / targetCoinToPrice) * amount)
        : '0'

    const handleClick = () => {
        dispatch(coinFromID_changed(coinTo))
        dispatch(coinToID_changed(coinFrom))
    }

    return (
        <Box>
            <Header/>

            <AnimatedGlowBackground>
                <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 10 }}>
                    <Box sx={{ width: '100%', maxWidth: 600, px: 2 }}>
                        <Typography sx={{ textAlign: 'center', mb: 1 }} variant='h3'>
                            {targetCoinFromSymbol} to {targetCoinToSymbol}
                        </Typography>

                        <Typography sx={{ fontWeight: 300, fontSize: 20, mb: 4, textAlign: 'center', color: 'text.primary' }}>
                            Crypto Converter
                        </Typography>

                        <Paper
                            elevation={0}
                            sx={{
                                px: 4, py: 4,
                                borderRadius: 4,
                                backgroundColor: 'rgba(255,255,255,0.75)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(0,0,0,0.06)',
                                boxShadow: '0 8px 32px rgba(34, 197, 94, 0.08)',
                            }}
                        >
                            <Box sx={{ display: 'flex', position: 'relative', flexDirection: 'column', gap: 2 }}>
                                <ConvertorElementFrom setAmount={setAmount}/>

                                <IconButton sx={{
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: '50%',
                                    position: 'absolute',
                                    top: '43%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'white',
                                    zIndex: 2,
                                    '&:hover': { backgroundColor: '#f0fdf4', borderColor: 'success.light' }
                                }}
                                            onClick={handleClick}
                                >
                                    <SwapVertIcon fontSize="small"/>
                                </IconButton>

                                <ConvertorElementTo result={result}/>

                                <Box color={theme.palette.text.secondary} sx={{display: 'flex', gap: 0.6}}>
                                    1 {targetCoinFromSymbol} =
                                    <Typography color='black'>
                                        {targetCoinFromPrice?.toLocaleString('en-ES')} USD
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Box>
                </Box>

                {modalIsOpen && <ConvertorModal/>}
            </AnimatedGlowBackground>
        </Box>
    );
};

export default Converter;