import { useState } from 'react';
import { useAppSelector } from '../app/hooks';
import { useGetProducts } from '../hooks/useGetProducts';
import Card from '../components/Card';

const MainPage = () => {
    const { products, isLoading, error } = useGetProducts();
    const likedProducts = useAppSelector(
        (state) => state.products.likedProducts
    );
    const [showLiked, setShowLiked] = useState(false);

    const filteredProducts = showLiked
        ? products.filter((product) => likedProducts.includes(product.id))
        : products;

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Err...</div>;

    return (
        <div className="h-screen w-[1200px] mx-auto">
            <button
                className="w-28 my-6 p-3 text-center rounded-md border border-black hover:bg-gray-50"
                onClick={() => setShowLiked(!showLiked)}
            >
                {showLiked ? 'Все' : 'Избранные'}
            </button>
            <div className="flex gap-2 flex-wrap">
                {filteredProducts.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
