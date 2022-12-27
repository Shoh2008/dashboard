import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from "../api-call";

const sales = createSlice({
    name: 'sales',
    initialState: {
        sales: [],
    },
    reducers: {
        getData: (state, action) => {
            state.sales = action.payload;
        },
        pushCart: (state, action) => {
            state.sales.push(action.payload);
        },
        pullCart: (state, action) => {
            state.sales.map((item, index) => {
                if (item.id === action.payload.id) {
                    state.sales.splice(index, 1);
                };
            });
        },
        editQuantity: (state, action) => {
            state.sales.map((item, index) => {
                if (item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                    if (action.payload.quantity < 1) { state.sales.splice(index, 1) };
                };
            })
        },
        clearProducts: (state) => {
            console.log(state)
            state.sales = [];
        },
        error: () => { }
    }
})

export const getProducts = () => apiCall({
    url: "product",
    method: "get",
    onSuccess: "sales/getData",
    onFail: "sales/error"
});
export const saleProducts = (data) => apiCall({
    url: "sale/sold",
    method: "post",
    onSuccess: "sales/clearProducts",
    onFail: "sales/error",
    data
});

export const { pushCart, pullCart, editQuantity, clearProducts } = sales.actions;
export default sales.reducer;