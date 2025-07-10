import { configureStore } from "@reduxjs/toolkit"
import AddBookReducer from "./cartSlice"


const appStore = configureStore({
    reducer: {
        AddBook: AddBookReducer,
    }
});
export default appStore;