import { ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImageProps } from "../components/ProductImage";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: ProductOnChangeArgs) => void;
  value?: number;
}

export interface ProductOnChangeArgs {
  product: Product;
  count: number;
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children, className }: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Image: (Props: ProductImageProps) => JSX.Element;
  Buttons: () => JSX.Element;
}
