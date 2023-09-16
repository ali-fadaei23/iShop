import ProductItem from "../product-item/ProductItem";
import "./ProductList.css";

const ProductList = ({ products, onDelete }) => {
  return (
    <>
      {products.map((item, index) => {
        return <ProductItem key={index} product={item} onDelete={onDelete} />;
      })}
    </>
  );
};

export default ProductList;
