import {createSlice} from "@reduxjs/toolkit";
import type {RootState} from "./store.ts";

const initialState = {
    coinFromID: 'tether',
    coinToID: 'bitcoin',
    modalIsOpen: false,
    modalStatus: '',
}
export const converterSlice = createSlice({
    name: "converter",
    initialState,
    reducers: {
        coinFromID_changed: (state, action) => {
            state.coinFromID = action.payload;
        },
        coinToID_changed: (state, action) => {
            state.coinToID = action.payload;
        },
        modalStatus_changed: (state, action) => {
            state.modalStatus = action.payload;
        },
        modalIsOpen_changed: (state, action) => {
            state.modalIsOpen = action.payload;
        }
    }
})

export const { coinFromID_changed, coinToID_changed, modalStatus_changed, modalIsOpen_changed } = converterSlice.actions;

export const selectCoinFrom = (state: RootState) => state.converter.coinFromID;
export const selectCoinTo = (state: RootState) => state.converter.coinToID;
export const selectModalIsOpen = (state: RootState) => state.converter.modalIsOpen;
export const selectModalStatus = (state: RootState) => state.converter.modalStatus;