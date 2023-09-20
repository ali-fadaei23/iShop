import ProductItem from "../product-item/ProductItem";
import "./ProductList.css";

const ProductList = ({ products }) => {
  return (
    <>
      {products.map((item, index) => {
        return <ProductItem  key={index} product={item} />;
      })}
    </>
  );
};

export default ProductList;
