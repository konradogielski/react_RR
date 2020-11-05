import React from "react";
import { Link } from "react-router-dom";
import Product from "../components/product";
const ProductPage = ({ match }) => {
  // console.log(props);
  return (
    <>
      <div>Strona prduktu</div>
      <Product id={match.params.id} />
      <Link to="/products"> Powrót do strony produktow</Link>
    </>
  );
};

export default ProductPage;
