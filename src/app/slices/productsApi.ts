import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../../types/types';

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (build) => ({
        fetchProducts: build.query<Product[], void>({
            query: () => 'products',
        }),
        fetchProductById: build.query<Product, string>({
            query: (id) => `products/${id}`,
        }),
    }),
});

export const { useFetchProductsQuery, useFetchProductByIdQuery } = productsApi;
