import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './context/user.context';
import { ProductProvider } from './context/product.context';
import { CartProvider } from './context/cart-context.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
//user go in to children of product
root.render(
<BrowserRouter>    
        <UserProvider>    
            <ProductProvider>
                <CartProvider>
                <App />
                </CartProvider>
            </ProductProvider>
        </UserProvider>       
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
