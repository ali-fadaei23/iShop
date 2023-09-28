import ProductItem from "../product-item/ProductItem";
import "./ProductList.css";
import { SnackbarProvider } from "notistack";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <SnackbarProvider maxSnack={2}>
            <ProductItem key={index} product={item} />
          </SnackbarProvider>
        );
      })}
    </>
  );
};

export default ProductList;
