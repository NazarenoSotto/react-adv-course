import React from "react";
import styles from "../styles/styles.module.css";
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => (
  <div style={{}}>
    <h1>Shopping Store</h1>
    <hr />
    <div className={styles.productList}>
      <ProductCard product={product}>
        <ProductCard.Image />
        <ProductCard.Title title={product.title} />
        <ProductCard.Buttons />
      </ProductCard>

      <ProductCard product={product}>
        <ProductImage />
        <ProductTitle title={"Tu vieja"} />
        <ProductButtons />
      </ProductCard>
    </div>
  </div>
);
