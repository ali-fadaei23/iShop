import "./ProductList.css";
import ProductItem from "../product-item/ProductItem";
import { SnackbarProvider } from "notistack";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <SnackbarProvider key={index} maxSnack={2}>
            <ProductItem product={item} />
          </SnackbarProvider>
        );
      })}
    </>
  );
};

export default ProductList;
