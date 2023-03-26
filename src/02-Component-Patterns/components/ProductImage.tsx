import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  return (
    <img
      className={styles.productImg}
      src={img ? img : product.img ? product.img : noImage}
      alt="Product"
    />
  );
};
