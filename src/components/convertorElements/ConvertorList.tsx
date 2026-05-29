import {Box, List, ListItemButton, Typography, useTheme} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import type {CoinsData} from "../../types.ts";
import {useSelector, useDispatch} from "react-redux";
import type {AppDispatch} from "recharts/types/state/store";
import {
    coinFromID_changed,
    coinToID_changed,
    selectModalStatus,
    modalIsOpen_changed,
    selectCoinFrom, selectCoinTo
} from "../../store/converterSlice.ts";

const ConvertorList = ({localCoins}: {localCoins: CoinsData[]}) => {
    const theme = useTheme()

    const dispatch = useDispatch<AppDispatch>()
    const modalStatus = useSelector(selectModalStatus)

    const coinStatus = useSelector(modalStatus === 'from' ? selectCoinFrom : selectCoinTo)

    const handleClick = ({coinID}: {coinID: string}) => {
        const action = modalStatus === 'from' ? coinFromID_changed : coinToID_changed;
        dispatch(action(coinID))

        dispatch(modalIsOpen_changed(false))
    }
    return (
        <List disablePadding sx={{maxHeight: 400, overflowY: 'auto', mt: 1}}>
            {localCoins.map(coin => {
                return <ListItemButton key={coin.id} onClick={() => handleClick({coinID: coin.id})} disableGutters sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, py: 1.5, '&:hover': { backgroundColor: 'rgb(0, 0, 0, 0.03)', cursor: 'pointer' }}}>
                    <Box sx={{display: 'flex', gap: 1, px: 4}}>
                        <Box component="img" src={coin.image} alt="name" sx={{ width: 35, height: 35 }} />

                        <Box sx={{
                            fontSize: 14,
                            color: 'black',
                            '&:hover': { cursor: 'pointer'},
                            display: 'flex',
                            alignItems: 'flex-start',
                            flexDirection: 'column',
                        }}>
                            {coin?.symbol.toUpperCase()}
                            <Typography sx={{fontSize: 13}}>
                                {coin.name}
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{px: 4,}}>
                        {coinStatus === coin.id && <CheckIcon sx={{color: theme.palette.primary.main}} />}
                    </Box>

                </ListItemButton>
            })}
        </List>
    );
};

export default ConvertorList;