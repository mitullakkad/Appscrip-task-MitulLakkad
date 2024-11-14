import React, { Fragment } from "react";
import ProductCard from "../../commonComponents/productCardComponent/productCard";
import "./products.css";

function Products(props) {
  return (
    <div className="productsMainBox">
      {props.cardData?.map((item) => {
        return (
          <Fragment key={item.id}>
            <ProductCard item={item} />
          </Fragment>
        );
      })}
    </div>
  );
}

export default Products;
