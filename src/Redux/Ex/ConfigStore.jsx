import { configureStore } from "@reduxjs/toolkit";
// import { CounterReducer } from "./CounterSlice";
import counterReducer from "./CounterSlice";



const Store = configureStore({
    reducer: {
        counter: counterReducer,
    }
});



export default Store;