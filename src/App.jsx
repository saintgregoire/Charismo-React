import './index.scss'
import Faq from "./Pages/Faq.jsx";
import Post from "./Pages/Post.jsx";
import Product from "./Pages/Product.jsx";
import Reviews from "./Pages/Reviews.jsx";
import Shop from "./Pages/Shop.jsx";
import { ModalContext, MyProvider } from './Services/ModalContext.jsx';
import { useContext } from 'react';
import Modal from "./Components/Modal.jsx";
import Header from "./Components/Header.jsx";
import Footer from './Components/Footer.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';

function App() {
    return (
        <MyProvider>
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
        </MyProvider>
    );
}

function ModalTrigger() {
    const { value } = useContext(ModalContext);

    return value ? <Modal /> : null;
}

export default App;