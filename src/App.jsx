import './index.scss'
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ModalContext, MyProvider, CartProvider, CartContext } from './Services/Context.jsx';

import Faq from "./Pages/Faq.jsx";
import Post from "./Pages/Post.jsx";
import Product from "./Pages/Product.jsx";
import Reviews from "./Pages/Reviews.jsx";
import Shop from "./Pages/Shop.jsx";
import Modal from "./Components/Modal.jsx";
import Header from "./Components/Header.jsx";
import Footer from './Components/Footer.jsx';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Cart from './Components/Cart.jsx';

function App() {
    return (
        <MyProvider>
                <CartProvider>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/faq" element={<Faq />} />
                        <Route path="/post" element={<Post />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/reviews" element={<Reviews />} />
                        <Route path="/shop" element={<Shop />} />
                    </Routes>
                    <Footer />
                    <ModalTrigger />
                    <CartTrigger />
                </CartProvider>
        </MyProvider>
    );
}

function ModalTrigger() {
    const { value } = useContext(ModalContext);

    return value ? <Modal /> : null;
}

function CartTrigger() {
    const {cartValue} = useContext(CartContext);

    return cartValue ? <Cart /> : null;
}

export default App;