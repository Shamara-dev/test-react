import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/types';

interface ProductsState {
    products: Product[];
    likedProducts: string[];
}

const initialState: ProductsState = {
    products: [],
    likedProducts: [],
};

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.products = action.payload;
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
        toggleLike: (state, action: PayloadAction<string>) => {
            const productId = action.payload;
            if (state.likedProducts.includes(productId)) {
                state.likedProducts = state.likedProducts.filter(
                    (id) => id !== productId
                );
            } else {
                state.likedProducts.push(productId);
            }
        },
    },
});

export const { setProducts, deleteProduct, toggleLike } = productsSlice.actions;
export default productsSlice.reducer;
