import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from "../api-call";
import { message } from "antd";

const orders = createSlice({
    name: 'orders',
    initialState: {
        data: [],
    },
    reducers: {
        getData: (state, action) => {
            state.data = action.payload.sort((a, b) => {
                if (a.createdAt > b.createdAt) return -1;
                if (a.createdAt < b.createdAt) return 1;
                return 0;
            });
        },
        addData: (state, action) => {
            state.data.push(action.payload);
        },
        deleteData: (state, action) => {
            state.data.map((item, index) => {
                if (item.id === action.id) {
                    state.data.splice(index, 1);
                    message.info('Item deleted');
                };
            });
        },
        editData: (state, action) => {
            state.data.map((item, index) => {
                if (item.id === action.payload.id) {
                    state.data.splice(index, 1, action.payload);
                };
            });
        },
        success: () => { },
        error: () => { message.error('Internal server error'); }
    }
})

export const getProducts = () => apiCall({
    url: "product",
    method: "get",
    onSuccess: "orders/getData",
    onFail: "orders/error"
});
export const createProduct = (data) => apiCall({
    url: "product",
    method: "post",
    onSuccess: "orders/success",
    onFail: "orders/error",
    data
});
export const editProduct = (data) => apiCall({
    url: "product/" + data.id,
    method: "put",
    onSuccess: "orders/editData",
    onFail: "orders/error",
    data
});
export const deleteProduct = (id) => apiCall({
    url: "product/" + id,
    method: "delete",
    onSuccess: "orders/deleteData",
    onFail: "orders/error",
    id
});

export default orders.reducer;