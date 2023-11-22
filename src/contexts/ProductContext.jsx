import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      label: "Iphone 13",
      price: 1250,
    },
    {
      id: 2,
      label: "Samsung",
      price: 1150,
    },
    {
      id: 3,
      label: "Samsung",
      price: 850,
    },
  ]);

  const deleteProduct = (id) => {
    const filtredProducts = products.filter((product) => product.id !== id);
    setProducts((prev) => {
      return filtredProducts;
    });
  };

  const addProduct = (item) => {
    setProducts([item, ...products]);
  };

  return (
    <ProductContext.Provider
      value={{
        message: "Hello World",
        title: "React.js",
        products,
        setProducts,
        deleteProduct,
        addProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
