import { useNavigate, useParams } from 'react-router-dom';
import { useFetchProductByIdQuery } from '../app/slices/productsApi';

const ProductPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { data, isLoading } = useFetchProductByIdQuery(id!);

    if (!data) {
        return <div>Product not found</div>;
    }

    const { title, price, description, image } = data;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="w-[1200px] my-6 mx-auto flex justify-between items-center">
            <div className="md:w-[40%]">
                <button
                    className="w-28 mb-6 p-3 rounded-md border border-black hover:bg-gray-50"
                    onClick={() => navigate('/')}
                >
                    Prev
                </button>
                <p className="font-bold text-4xl">{title}</p>
                <p className="pt-6 font-semibold text-2xl">{price}$</p>
                <p className="pt-12 pb-8 text-base">{description}</p>
            </div>
            <div className="md:w-[30%]">
                <img
                    className="w-[300px] h-[400px] object-contain flex-shrink-0"
                    src={image}
                    alt="product"
                />
            </div>
        </div>
    );
};

export default ProductPage;
