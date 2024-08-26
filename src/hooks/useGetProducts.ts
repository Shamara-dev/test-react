import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useFetchProductsQuery } from '../app/slices/productsApi';
import { setProducts } from '../app/slices/productsSlice';

export const useGetProducts = () => {
    const { data, isLoading, error } = useFetchProductsQuery();
    const products = useAppSelector((state) => state.products.products);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (data && products.length === 0) {
            dispatch(setProducts(data));
        }
    }, [data]);

    return { products, isLoading, error };
};
