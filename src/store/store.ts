import {configureStore} from "@reduxjs/toolkit";
import {fetchApi} from "./cryptoApiSlice";
import {fetchApiNews} from "./newsApiSlice";
import {newsSlice} from "./newsSlice";
import coinsReducer from './coinsSlice'
import {converterSlice} from "./converterSlice";
import {appSlice} from './AppSlice'

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