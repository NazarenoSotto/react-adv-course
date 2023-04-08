import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface ProductTitleProps {
  title?: string;
}

export const ProductTitle = ({ title }: ProductTitleProps) => {
  const { product } = useContext(ProductContext);
  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}
    </span>
  );
};
