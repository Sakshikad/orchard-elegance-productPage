import React, { useEffect } from "react";
import Banner from "../../components/common/Banner";
import bg_1 from "../../assets/Images/bg_1.jpg";
import ProductList from "./components/ProductList";

const ShopPage = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);


  return (
    <>
      <Banner backImg={bg_1} title={"Shop"} subtitle={"Home Shop"} />
      <ProductList />
    </>
  );
};

export default ShopPage;
