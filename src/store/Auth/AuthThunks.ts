import { createAsyncThunk } from "@reduxjs/toolkit";
import { authAPI } from "../../api/AuthAPI";
import { IUserBody } from "../../interfaces/IData";
import { setUsername } from "./AuthSlice";

export const getToken = createAsyncThunk("getToken", 
    async (payload: {data: IUserBody, checked: boolean}, thunkAPI): Promise<any> => {
    try {
        const { data: { access_token }} = await authAPI.getToken(payload.data);
        thunkAPI.dispatch(setUsername(payload.data.username));
        if (payload.checked) {
            localStorage.setItem("accessToken", access_token);
            localStorage.setItem("username", payload.data.username);
          }
        return access_token;
    } catch (e) {
        return thunkAPI.rejectWithValue(e);
    }
});

