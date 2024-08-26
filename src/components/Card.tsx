import { useAppSelector, useAppDispatch } from '../app/hooks';
import { toggleLike, deleteProduct } from '../app/slices/productsSlice';
import { useNavigate } from 'react-router-dom';
import { Product } from '../types/types';
import LikeIcon from '../assets/LikeIcon';

const Card = ({ id, title, image }: Product) => {
    const likedProducts = useAppSelector(
        (state) => state.products.likedProducts
    );
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLiked = likedProducts.includes(id);

    const handleLike = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
        e.stopPropagation();
        dispatch(toggleLike(id));
    };

    const handleDelete = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.stopPropagation();
        dispatch(deleteProduct(id));
    };

    return (
        <div
            className="h-[300px] w-[200px] flex flex-col gap-1 cursor-pointer"
            onClick={() => navigate(`products/${id}`)}
        >
            <img
                className="h-[200px] w-[200px] object-contain"
                src={image}
                alt={title}
            />
            <p className="text-xl line-clamp-1">{title}</p>
            <div className="px-2 flex justify-between items-center">
                <LikeIcon
                    onClick={handleLike}
                    fill={isLiked ? '#f32' : 'none'}
                    stroke={isLiked ? 'none' : 'currentColor'}
                />
                <button
                    className="p-1 text-lg rounded-md bg-red-500 text-white hover:bg-red-600"
                    onClick={handleDelete}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default Card;
