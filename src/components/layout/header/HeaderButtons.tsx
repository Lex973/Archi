import {Stack} from "@mui/material";
import MainButton from "../../ui/button/MainButton.tsx";
import {Link} from "react-router-dom";
import {mainPage_changed, selectMainPage} from "../../../store/AppSlice.ts";
import {useSelector, useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";

const HeaderButtons = () => {
    const dispatch = useDispatch<AppDispatch>()
    const pageSelected = useSelector(selectMainPage)

    const setPage = (status: string) => {
        dispatch(mainPage_changed(status))
    }
    return (
        <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
            <Link to='/'>
                <MainButton active={pageSelected} setActive={setPage}>Cryptocurrencies</MainButton>
            </Link>

            <MainButton active={pageSelected} setActive={setPage}>Portfolio</MainButton>

            <Link to='/converter'>
                <MainButton active={pageSelected} setActive={setPage}>Converter</MainButton>
            </Link>
        </Stack>
    );
};

export default HeaderButtons;