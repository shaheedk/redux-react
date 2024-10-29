import {createSlice} from '@reduxjs/toolkit'

  const INITIAL_STATE={
cartList:[],
cartCount:0
  }
const cartSlice=createSlice({
    name:'cart',
    initialState:INITIAL_STATE,
reducers:{
    addToCart: (state)=>{
state.cartCount=1
    },
    increment:()=>{
        state.cartCount+=1
    },
decrement:()=>{
    state.cartCount -=1
}
}
})
export const {increment,decrement,addToCart} =cartSlice.actions
export default createSlice.reducer;
