import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getToken } from "./AuthThunks";

interface IAuthState {
    loading: boolean,
    error: string,
    token: string,
    username: string
}

const initialState: IAuthState = {
    loading: false,
    error: "",
    token: "",
    username: "",
}

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        removeToken(state: IAuthState) {
            state.token = "";
            state.username = "";
            localStorage.removeItem("accessToken");
            localStorage.removeItem("username");
        },
        writeToken(state: IAuthState, action: PayloadAction<string>) {
            state.token = action.payload;
        },
        setUsername (state: IAuthState, action: PayloadAction<string>) {
            state.username = action.payload;
        }
    },
    extraReducers: {
        [getToken.pending.type]: (state: IAuthState) => {
            state.loading = true
        },
        [getToken.fulfilled.type]: (state: IAuthState, action: PayloadAction<string>) => {
            state.loading = false
            state.error = ""
            state.token = action.payload
        },
        [getToken.rejected.type]: (state: IAuthState, action: PayloadAction<string>) => {
            state.loading = false
            state.token = ""
            state.error = action.payload
        }
    },
});

export const authReducer = AuthSlice.reducer;
export const { removeToken, writeToken, setUsername } = AuthSlice.actions;