import { BrowserRouter, Route, Routes } from "react-router-dom";

import Wrapper from "@components/Wrapper";
import ShopPage from "@modules/shop";
import HomePage from "@modules/home";
import CartPage from "@modules/cart";
import ProductDetailPage from "@components/product/ProductDetailPage";
import ProfilePage from "../../components/User/ProfilePage";
import CheckOutPage from "@modules/checkout";
import Blog from "../blog/component/Blog";
import BlogDetail from "../blog/component/BlogDetails";

function MainRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<div>Login</div>} />
          <Route path="/" element={<Wrapper />}>
            <Route index element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/checkout" element={<CheckOutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/about" element={<div>about</div>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:id" element={<BlogDetail/>} />
            <Route path="/contact" element={<div>contact</div>} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default MainRoutes;
