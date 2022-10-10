import { createContext, useState, useEffect } from "react";

import {
  addCollectionAndDocuments,
  getCategoriesAndDocuments,
} from "../firebase/firebase.utils.jsx";

// ***** import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      return setCategoriesMap(categoryMap);
    };

    getCategoriesMap();
  }, []);

  // ***** only run once to upload data to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // });

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {" "}
      {children}{" "}
    </CategoriesContext.Provider>
  );
};
