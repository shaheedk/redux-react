// store cant pass multiple time .only one time 
import { configureStore } from "@testing-library/react";
import cartReducer from './Cart'
const store=configureStore({
    reducer:{
        cart: cartReducer,

    }

})