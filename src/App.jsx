import style from './App.module.scss'
import { Routes, Route } from "react-router-dom"
import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Blog from "./Pages/Blog.jsx";
import Faq from "./Pages/Faq.jsx";
import Post from "./Pages/Post.jsx";
import Product from "./Pages/Product.jsx";
import Reviews from "./Pages/Reviews.jsx";
import Shop from "./Pages/Shop.jsx";

function App() {

  return (
    <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/post" element={<Post />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/reviews" element={<Reviews />}></Route>
            <Route path="/shop" element={<Shop />}></Route>
        </Routes>
        <Footer />
    </>
  )
}

export default App
