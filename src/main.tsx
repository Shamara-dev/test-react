import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage.tsx';
import ProductPage from './pages/ProductPage.tsx';
import './index.css';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainPage />,
        },
        {
            path: '/:id',
            element: <ProductPage />,
        },
    ],
    { basename: import.meta.env.BASE_URL }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
