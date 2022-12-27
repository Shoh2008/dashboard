import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from "../api-call";

const history = createSlice({
    name: 'history',
    initialState: {
        data: [],
    },
    reducers: {
        getData: (state, action) => {
            state.data = action.payload.filter(item => item.productList.length !== 0);
        },
        error: () => {}
    }
})

export const getHistory = () => apiCall({
    url: "sale/history",
    method: "get",
    onSuccess: "history/getData",
    onFail: "history/error"
});

export default history.reducer;