import { createSlice } from '@reduxjs/toolkit';
import { apiCall } from "../api-call";

const charts = createSlice({
    name: 'charts',
    initialState: {
        analiytics: [],
        table: [],
        category: [],
    },
    reducers: {
        getData: (state, action) => {
            state.table = action.payload.slice(0, 10);

            const filteredData = action.payload.filter(item => {
                if (item.productList.length !== 0) {
                    return item;
                };
            });
            const responsedata = filteredData.sort((a, b) => {
                if (a.createdAt > b.createdAt) return -1;
                if (a.createdAt < b.createdAt) return 1;
                return 0;
            });
            const data = responsedata.filter(({ createdAt }) => {
                const date = new Date(createdAt);
                const myDate = new Date(Date.now());
                myDate.setDate(myDate.getDate() - 16);
                return date >= myDate;
            });
            state.analiytics = data.map((item) => {
                return {
                    createdAt: item.createdAt.substring(0, 10), price: item.productList.reduce((t, d) => {
                        return t += d.product.price;
                    }, 0)
                };
            });
        },
        getProducts: (state, action) => {
            state.category = action.payload.filter(item => item.category === 'smartphone' || item.category === 'watch' || item.category === 'headphone');
        },
        error: () => {},
    }
})

export const getChartData = () => apiCall({
    url: "sale/history",
    method: "get",
    onSuccess: "charts/getData",
    onFail: "charts/error"
});

export const getProducts = () => apiCall({
    url: "product",
    method: "get",
    onSuccess: "charts/getProducts",
    onFail: "charts/error"
});

export default charts.reducer;