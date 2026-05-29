import {Box, InputBase, Typography, useTheme} from "@mui/material";
import {modalIsOpen_changed, modalStatus_changed, selectCoinTo} from "../../store/converterSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import {useGetCoinsListQuery} from "../../store/cryptoApiSlice.ts";
import {selectPage} from "../../store/newsSlice.ts";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface ConvertorElementProps {
    result?: string;
}
export const letters = [
    'а','б','в','г','д','е','ё','ж','з','и','й','к','л','м','н','о','п','р','с','т','у','ф','х','ц','ч','ш','щ','ъ','ы','ь','э','ю','я',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
]

const ConvertorElementTo = ({result}: ConvertorElementProps) => {
    const theme = useTheme()

    const dispatch = useDispatch<AppDispatch>()
    const currentPage = useSelector(selectPage)

    const { data } = useGetCoinsListQuery({page: currentPage});

    const coinStatus = useSelector(selectCoinTo)

    const targetCoin = data?.coins.find(coin => coin.id === coinStatus)
    if (!targetCoin) return null

    const handleChange = (text: string) => {
        if (letters.includes(text[text.length - 1])) {
            return
        }
    }
    const handleClick = () => {
        dispatch(modalIsOpen_changed(true))
        dispatch(modalStatus_changed('to'))
    }
    return (
        <Box sx={{border: '1px solid rgba(0,13,29,.08)', width: 500, height: 120, borderRadius: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <Typography sx={{ fontSize: 14, color: theme.palette.text.secondary, px: 3, top: 15 }}>
                To
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
                    value={result}
                    onChange={(e) => handleChange(e.target.value)}
                    placeholder="0"
                    sx={{ input: { textAlign: 'right', mr: 3, fontSize: 35 } }}
                />
            </Box>
        </Box>
    );
};

export default ConvertorElementTo;