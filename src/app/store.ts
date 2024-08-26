import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from './slices/productsApi';
import productsSlice from './slices/productsSlice';

export const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer,
        products: productsSlice,
    },
    middleware: (getDefaultMiddleweare) =>
        getDefaultMiddleweare().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
