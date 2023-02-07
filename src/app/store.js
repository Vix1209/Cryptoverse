import { configureStore } from "@reduxjs/toolkit";
import {setupListeners} from '@reduxjs/toolkit/query'
// connecting the api to the store 
import { cryptoApi } from "../services/cryptoApi";


export default configureStore({
    reducer:{
        [cryptoApi.reducerPath] : cryptoApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cryptoApi.middleware),
}) 

// take note that each data to be fetched comes from a specific endpoint in the api e.g 'getcryptos' in the 'cryptoApi.js' file
// example we have the home page information ie total cryprocurrencies, total market cap, total exchange etc
// to get that
setupListeners(configureStore.dispatch)
