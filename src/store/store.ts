import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { authReducer } from "./Auth/AuthSlice";
import thunkMiddleware from 'redux-thunk';


export const store = configureStore({
    reducer: combineReducers({
        authReducer,
    }),
    middleware: [thunkMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
