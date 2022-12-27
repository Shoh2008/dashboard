import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from "../api-call";

const dashboard = createSlice({
    name: 'dashboard',
    initialState: {
        dashboard: [],
        dashboardyesterday: [],
        create: [],
        createyesterday: [],
    },
    reducers: {
        getData: (state, action) => {
            state.dashboard = action.payload.filter(item => item.createdAt ? item.createdAt.substring(0, 10) === JSON.stringify(new Date()).substring(1, 11) : {});
            state.dashboardyesterday = action.payload.filter(item => item.createdAt ? item.createdAt.substring(0, 10) === `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() - 1}` : {});
        },
        getProduct: (state, action) => {
            state.create = action.payload.filter(item => item.createdAt ? item.createdAt.substring(0, 10) === JSON.stringify(new Date()).substring(1, 11) : {});
            state.createyesterday = action.payload.filter(item => item.createdAt ? item.createdAt.substring(0, 10) === `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate() - 1}` : {});
        },
        error: () => { },
    }
})

export const getData = () => apiCall({
    url: "sale/history",
    method: "get",
    onSuccess: "dashboard/getData",
    onFail: "dashboard/error"
});

export const getProduct = () => apiCall({
    url: "product",
    method: "get",
    onSuccess: "dashboard/getProduct",
    onFail: "dashboard/error"
});

export default dashboard.reducer;