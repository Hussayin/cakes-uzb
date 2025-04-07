import React, { createContext, useState, useEffect } from "react";

//! product import
import { AllCakes } from "../Data/WatchData";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //! product state
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(AllCakes);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
