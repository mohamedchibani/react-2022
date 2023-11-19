import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";

function Products() {
  let title = "Learn how to create apps with reactjs 2022";
  let showList = true;

  let [products, setProducts] = useState([
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
      console.log("🚀 ~ file: Products.jsx:30 ~ setProducts ~ prev:", prev);
      return filtredProducts;
    });
  };

  return (
    <>
      <h1>{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam
        sint tenetur sapiente .
      </p>

      <Counter />

      {showList && (
        <div>
          {products.map((product, index) => (
            <Product
              onDeleteProduct={deleteProduct}
              key={product.id}
              id={product.id}
            >
              <div className='card-body'>
                <h4 className='card-title'>{product.label}</h4>
                <p className='card-text'>
                  <button className='btn btn-success'>{product.price}</button>
                </p>
              </div>
            </Product>
          ))}
        </div>
      )}
    </>
  );
}

export default Products;
