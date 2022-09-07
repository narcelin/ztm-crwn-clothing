import CategoryItem from "../category-item/category-item.component";

import "./directory.styles.scss";

const Directory = ({ categoriesProp }) => {
  return (
    <div className="categories-container">
      {categoriesProp.map((category) => (
        <CategoryItem key={category.id} propCategory={category} />
      ))}
    </div>
  );
};
export default Directory;
