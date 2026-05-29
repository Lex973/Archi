import {configureStore} from "@reduxjs/toolkit";
import {fetchApi} from "./cryptoApiSlice.ts";
import {fetchApiNews} from "./newsApiSlice.ts";
import {newsSlice} from "./newsSlice.ts";
import coinsReducer from './coinsSlice.ts'
import {converterSlice} from "./converterSlice.ts";
import {appSlice} from './AppSlice.ts'

export const store = configureStore({
    reducer: {
        news: newsSlice.reducer,
        [fetchApi.reducerPath]: fetchApi.reducer,
        [fetchApiNews.reducerPath]: fetchApiNews.reducer,
        coins: coinsReducer,
        converter: converterSlice.reducer,
        app: appSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(fetchApi.middleware)
            .concat(fetchApiNews.middleware);
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch