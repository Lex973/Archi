import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

export const initialNewsState = {
    searchQueryNews: '',
    sortByNews: 'Popularity',
    languageNews: 'en',
    page: 1,
}
export const newsSlice = createSlice({
    name: "news",
    initialState: initialNewsState,
    reducers: {
        searchQuery_changed: (state, action) => {
            state.searchQueryNews = action.payload;
        },
        sortByNews_changed: (state, action) => {
            state.sortByNews = action.payload;
        },
        languageNews_changed: (state, action) => {
            state.languageNews = action.payload;
        },
        pageNews_changed: (state, action) => {
            state.page = action.payload;
        }
    }
})

export const { searchQuery_changed, sortByNews_changed, languageNews_changed } = newsSlice.actions;

export const selectPage = (state: RootState) => state.news.page;
export const selectLanguageNews = (state: RootState) => state.news.languageNews;
export const selectSortByNews = (state: RootState) => state.news.sortByNews;
export const selectSearchQueryNews = (state: RootState) => state.news.searchQueryNews;