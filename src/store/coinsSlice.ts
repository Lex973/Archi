import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

interface CoinsStateInterface{
    currentPage: number;
    favorites: string[];
}

const initialState: CoinsStateInterface = {
    currentPage: 1,
    favorites: []
}
const newsSlice = createSlice({
    name: "coins",
    initialState,
    reducers: {
        page_changed: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        toggleIsFavorite: (state, action: PayloadAction<string>) => {
            if(state.favorites.includes(action.payload)){
                state.favorites = state.favorites.filter(id => id !== action.payload)
                return
            }
            state.favorites.push(action.payload)
        }
    }
})

export const { page_changed } = newsSlice.actions;

export const selectPage = (state: RootState) => state.coins.currentPage;

export default newsSlice.reducer