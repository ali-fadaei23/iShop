import CategoryItem from "../category-item/CategoryItem";
import "./CategoryList.css";

const CategoryList = ({ categories }) => {
  return (
    <>
      {categories.map((item, index) => {
        return (
          <div className="category" key={index}>
            <CategoryItem category={item} />
          </div>
        );
      })}
    </>
  );
};

export default CategoryList;
