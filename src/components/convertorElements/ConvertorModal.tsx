import {Box, Paper, Typography, useTheme, TextField, InputAdornment, Zoom, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import ConvertorList from "./ConvertorList.tsx";
import {useEffect, useState} from "react";
import {useGetCoinsListQuery} from "../../store/cryptoApiSlice.ts";
import {selectPage} from "../../store/newsSlice.ts";
import {useSelector, useDispatch} from "react-redux";
import {sortCoinsConverterQuery} from "../../utils/utilsFunc.ts";
import {modalIsOpen_changed, selectModalIsOpen} from "../../store/converterSlice.ts";
import type {AppDispatch} from "recharts/types/state/store";

const ConvertorModal = () => {
    const theme = useTheme()
    const currentPage = useSelector(selectPage);
    const dispatch = useDispatch<AppDispatch>()
    const modalIsOpen = useSelector(selectModalIsOpen)
    const [localValue, setLocalValue] = useState('')

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                dispatch(modalIsOpen_changed(false))
            }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [])

    const { data } = useGetCoinsListQuery({page: currentPage});

    const filteredCoins = localValue
        ? sortCoinsConverterQuery(data?.coins ?? [], localValue.toLowerCase())
        : data?.coins ?? [];

    const handleChange = (query: string) => {
        setLocalValue(query)
    }

    const handleClose = () => {
        dispatch(modalIsOpen_changed(false))
    }

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            backgroundColor: 'rgb(0, 0, 0, 0.3)',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
        }} onClick={handleClose}>
            <Zoom in={modalIsOpen} timeout={400} style={{ transformOrigin: 'center center' }}>
                <Paper onClick={(e) => e.stopPropagation()} sx={{ borderRadius: 4.5, width: 520, height: 604, backgroundColor: 'white' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 3, px: 4 }}>
                        <Typography variant='h5'>Crypto</Typography>
                        <IconButton onClick={handleClose} size="small">
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Typography sx={{fontSize: 13, px: 4}} color={theme.palette.text.secondary}>
                        Select Crypto
                    </Typography>

                    <TextField
                        placeholder='Search'
                        variant="outlined"
                        value={localValue}
                        onChange={(e) => handleChange(e.target.value)}
                        sx={{
                            px: 4,
                            mt: 1,
                            width: '100%',
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                '&.Mui-focused fieldset': {
                                    borderColor: theme.palette.text.primary,
                                    border: '1px solid black',
                                },
                            },
                        }}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            },
                        }}
                    />

                    <ConvertorList localCoins={filteredCoins}/>
                </Paper>
            </Zoom>
        </Box>
    );
};

export default ConvertorModal;