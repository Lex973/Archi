import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

const initialState = {
    mainPage: 'Cryptocurrencies'
}
export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        mainPage_changed: (state, action) => {
            state.mainPage = action.payload
        }
    }
})

export const { mainPage_changed } = appSlice.actions;

export const selectMainPage = (state: RootState) => state.app.mainPage;
