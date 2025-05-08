import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./Auth"

const Store = configureStore({
    reducer: {
        auth: AuthReducer,
    },
})


export default Store