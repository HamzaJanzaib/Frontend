import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./Auth"
import CartReducer from "./Cart"

const Store = configureStore({
    reducer: {
        auth: AuthReducer,
        cart: CartReducer,
    },
})


export default Store