import { createSlice } from "@reduxjs/toolkit";
import Books from "./DummyData";
const AddBookSlice = createSlice({
    name: "AddBook",
    initialState: {
        items: Books,
        newItems: [],
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
            state.newItems.push(action.payload);
        },
        removeItem: (state, action) => {
            // Remove item 
            state.items.pop();
        },
        // Clear all items
        clearItems: (state) => {
            state.items.length = 0; 
        }
    }
});


// Export actions from AddBookSlice.actions 
export const { addItem, removeItem, clearItems } = AddBookSlice.actions;
export default AddBookSlice.reducer;
