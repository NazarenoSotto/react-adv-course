import React, { useState } from "react";
import { Product, ProductInCart } from "../interfaces/Product";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
    setShoppingCart((oldState: any) => {
      if (count === 0) {
        const { [product.id]: _toDelete, ...rest } = oldState;
        return rest;
      }

      return { ...oldState, [product.id]: { ...product, count } };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  };
};
