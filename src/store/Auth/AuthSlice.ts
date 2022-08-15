import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "./AuthThunks";
import { IState } from "../../interfaces/IState";

const initialState: IState = {
    loading: false,
    error: "",
    token: "",
    username: "",
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeToken(state: IState) {
            state.token = "";
            state.username = "";
        },
        writeToken(state: IState, action: PayloadAction<any>) {
            state.token = action.payload;
        },
        setUsername (state: IState, action: PayloadAction<any>) {
            state.username = action.payload;
        }
    },
    extraReducers: {
        [getToken.pending.type]: (state: IState) => {
            state.loading = true
        },
        [getToken.fulfilled.type]: (state: IState, action: PayloadAction<any>) => {
            state.loading = false
            state.error = ""
            state.token = action.payload
        },
        [getToken.rejected.type]: (state: IState, action: PayloadAction<any>) => {
            state.loading = false
            state.token = ""
            state.error = action.payload
        }
    },
});

export const authReducer = AuthSlice.reducer;
export const { removeToken, writeToken, setUsername } = AuthSlice.actions;