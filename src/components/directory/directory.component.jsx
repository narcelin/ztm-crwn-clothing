import DirectoryItem from "../directory-item/directory-item.component";

import "./directory.styles.scss";

const Directory = ({ categoriesProp }) => {
  return (
    <div className="directory-container">
      {categoriesProp.map((category) => (
        <DirectoryItem key={category.id} propCategory={category} />
      ))}
    </div>
  );
};
export default Directory;
