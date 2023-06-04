import { configureStore } from '@reduxjs/toolkit'
import customersSlice from "./slices/customersSlice"

const reducer = {
    customers: customersSlice,
}

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})
