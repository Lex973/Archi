import {Box, InputBase, Typography, useTheme} from "@mui/material";
import {modalIsOpen_changed, modalStatus_changed, selectCoinFrom} from "../../store/converterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import {useGetCoinsListQuery} from "../../store/cryptoApiSlice.ts";
import {selectPage} from "../../store/newsSlice.ts";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {letters} from "./ConvertorElementTo.tsx";
import {useState} from "react";

interface ConvertorElementProps {
    setAmount?: (amount: number) => void;
}

const ConvertorElementFrom = ({setAmount}: ConvertorElementProps) => {
    const theme = useTheme()

    const dispatch = useDispatch<AppDispatch>()
    const currentPage = useSelector(selectPage)

    const { data } = useGetCoinsListQuery({page: currentPage});

    const coinStatus = useSelector(selectCoinFrom)

    const [localValue, setLocalValue] = useState<string>('');

    const targetCoin = data?.coins.find(coin => coin.id === coinStatus)
    if (!targetCoin) return null


    const handleChange = (text: string) => {
        if (letters.includes(text[text.length - 1])) return;

        const cleaned = text.replace(/[^\d]/g, '');

        const formatted = Number(cleaned).toLocaleString('en-ES');

        setLocalValue(formatted);
        setAmount?.(Number(cleaned));
    };
    const handleClick = () => {
        dispatch(modalIsOpen_changed(true))
        dispatch(modalStatus_changed('from'))
    }
    return (
        <Box sx={{border: '1px solid rgba(0,13,29,.08)', width: 500, height: 120, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography sx={{ fontSize: 14, color: theme.palette.text.secondary, px: 3, top: 15 }}>
                From
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
                <Box sx={{px: 3, display: 'flex', alignItems: 'center'}}>
                    <Box
                        component="img"
                        src={targetCoin.image}
                        sx={{ width: 35, height: 35, borderRadius: '50%' }}
                    />

                    <Box sx={{
                        fontSize: 16,
                        color: 'black',
                        '&:hover': { cursor: 'pointer'},
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        ml: 2,
                        fontWeight: 'bold',
                    }}
                         onClick={handleClick}
                    >
                        <Box sx={{display: 'flex', alignItems: 'center'}}>
                            {targetCoin.symbol.toUpperCase()}
                            <ArrowDropDownIcon/>
                        </Box>
                        <Typography sx={{fontSize: 10}} color={theme.palette.text.secondary}>
                            {targetCoin.name}
                        </Typography>
                    </Box>
                </Box>

                <InputBase
                    value={localValue}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="0"
                    sx={{ input: { textAlign: 'right', mr: 3, fontSize: 35 } }}
                />
            </Box>
        </Box>
    );
};

export default ConvertorElementFrom;