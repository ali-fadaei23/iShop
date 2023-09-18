import ProductItem from "../product-item/ProductItem";
import "./ProductList.css";

const ProductList = ({ products, onDelete, count }) => {
  return (
    <>
      {products.map((item, index) => {
        return (
          <ProductItem
            handleCount={count}
            key={index}
            product={item}
            onDelete={onDelete}
          />
        );
      })}
    </>
  );
};

export default ProductList;
