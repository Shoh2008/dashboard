import { configureStore } from '@reduxjs/toolkit';
import history from '../redux/reducer/history';
import orders from '../redux/reducer/orders';
import sales from '../redux/reducer/sales';
import dashboard from '../redux/reducer/dashboard';
import charts from '../redux/reducer/charts';
import api from "./middleware/api";

export default configureStore({
    reducer: { history, orders, sales, dashboard, charts },
    middleware: [api]
});