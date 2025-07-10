import { configureStore } from "@reduxjs/toolkit"
import AddBookReducer from "./addBookSlice"


const appStore = configureStore({
    reducer: {
        AddBook: AddBookReducer,
    }
});
export default appStore;