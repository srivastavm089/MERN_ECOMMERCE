import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import productSlice from '../features/product-list/productlistSlice'
const rootReducer = combineReducers({
    counter:counterReducer,
    product:productSlice
})
export default rootReducer