import React, { createContext, useState, useEffect } from "react";
import { AllWatchs } from "../Data/WatchData";

export const DetailContext = createContext();

const DetailProvider = ({ children }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(AllWatchs);
  }, []);

  return (
    <DetailContext.Provider value={{ products }}>
      {children}
    </DetailContext.Provider>
  );
};

export default DetailProvider;
