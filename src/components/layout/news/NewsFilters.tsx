import {Box, FormControl, InputAdornment, Select, TextField, MenuItem, Button, useTheme} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {
    sortByNews_changed,
    searchQuery_changed,
    selectSortByNews, selectLanguageNews, languageNews_changed
} from "../../../store/newsSlice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {useRef, useState} from "react";

const NewsFilters = () => {
    const dispatch = useDispatch<AppDispatch>()
    const theme = useTheme()

    const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [localValue, setLocalValue] = useState<string>('')

    const sortByNews = useSelector(selectSortByNews)
    const languageNews = useSelector(selectLanguageNews)

    return (
        <Box sx={{display: 'flex', gap: 3}}>
            <Button sx={{
                backgroundColor: `${sortByNews === 'Relevancy' ? theme.palette.secondary.light : 'white'}`,
                boxShadow: 'none',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: theme.palette.secondary.light,
                    boxShadow: 'none',
                },
                color: `${sortByNews === "Relevancy" ? theme.palette.secondary.main : 'black'}`,
            }}
            onClick={() => dispatch(sortByNews_changed('Relevancy'))}
            >
                Relevancy
            </Button>

            <Button sx={{
                backgroundColor: `${sortByNews === 'PublishedAt' ? theme.palette.secondary.light : 'white'}`,
                boxShadow: 'none',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: theme.palette.secondary.light,
                    boxShadow: 'none',
                },
                color: `${sortByNews === "PublishedAt" ? theme.palette.secondary.main : 'black'}`,
            }}
                    onClick={() => dispatch(sortByNews_changed('PublishedAt'))}
            >
                PublishedAt
            </Button>

            <Button sx={{
                backgroundColor: `${sortByNews === 'Popularity' ? theme.palette.secondary.light : 'white'}`,
                boxShadow: 'none',
                textTransform: 'none',
                borderRadius: 2,
                '&:hover': {
                    backgroundColor: theme.palette.secondary.light,
                    boxShadow: 'none',
                },
                color: `${sortByNews === "Popularity" ? theme.palette.secondary.main : 'black'}`,
            }}
                    onClick={() => dispatch(sortByNews_changed('Popularity'))}
            >
                Popularity
            </Button>


            <TextField
                value={localValue}
                onChange={(e) => {
                    setLocalValue(e.target.value)
                    if (timeout.current) clearTimeout(timeout.current)

                    timeout.current = setTimeout(() => {
                        dispatch(searchQuery_changed(e.target.value))
                    }, 400)
                }}
                placeholder="Searh everything news"
                variant="outlined"
                sx={{
                    '& .MuiInputBase-root': {
                        height: 40,
                        width: 340,
                        borderRadius: 3,
                    }
                }}
                slotProps={{
                    input: {
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        )
                    }
                }}
            />

            <FormControl size="small" sx={{ minWidth: 50 }}>
                <Select value={languageNews} onChange={(e) => dispatch(languageNews_changed(e.target.value))} displayEmpty sx={{borderRadius: 3}}>
                    <MenuItem value="" disabled>Language</MenuItem>
                    <MenuItem value="en">🇺🇸 English</MenuItem>
                    <MenuItem value="es">🇪🇸 Español</MenuItem>
                    <MenuItem value="fr">🇫🇷 Français</MenuItem>
                    <MenuItem value="it">🇮🇹 Italiano</MenuItem>
                    <MenuItem value="ru">🇷🇺 Русский</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default NewsFilters;