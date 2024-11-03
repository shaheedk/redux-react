// store cant pass multiple time .only one time 
import { configureStore } from '@reduxjs/toolkit';

import cartReducer from './Cart'
export const store=configureStore({
    reducer:{
        cart: cartReducer,

    },

})