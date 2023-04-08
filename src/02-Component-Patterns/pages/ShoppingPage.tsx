import React from "react";
import styles from "../styles/styles.module.css";
import "../styles/custom-styles.css";
import { useState } from "react";
import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import { Product } from "../interfaces/Product";
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div style={{}}>
      <h1>Shopping Store</h1>
      <hr />
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onChange={(evento) => onProductCountChange(evento)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, cartProduct]) => (
          <ProductCard
            key={key}
            product={cartProduct}
            style={{ width: "100px" }}
            value={cartProduct.count}
            onChange={(evento) => onProductCountChange(evento)}
          >
            <ProductImage />
            <ProductTitle title={"Tu vieja"} />
            <ProductButtons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
