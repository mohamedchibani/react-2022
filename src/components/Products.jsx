import { useState, useContext, useRef } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";

import { ProductContext } from "../contexts/ProductContext";

function Products() {
  const title = useRef("");
  const price = useRef(0);

  const { products, addProduct } = useContext(ProductContext);

  let showList = true;

  const [message, setMessage] = useState("");

  const titleInput = (e) => {
    if (e.target.value === "") {
      setMessage("Title is required");
    } else if (e.target.value.trim().length <= 3) {
      setMessage("Please tape at least 3 caracters");
    } else {
      setMessage("");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    let myProduct = {
      id: uuid(),
      label: title.current.value,
      price: price.current.value,
    };

    title.current.value = "";
    price.current.value = 0;

    addProduct(myProduct);
  };

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam
        sint tenetur sapiente .
      </p>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='title' class='form-label'>
            Title
          </label>
          <input id='title' ref={title} className='form-control' type='text' />
          {message && <div className='alert alert-danger'>{message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='price' class='form-label'>
            Price
          </label>
          <input
            id='price'
            ref={price}
            className='form-control'
            type='number'
          />
        </div>
        <button class='btn btn-primary my-2 mb-4'>Save</button>
      </form>
      <Counter />
      {showList && (
        <div>
          {products.map((product, index) => (
            <Product key={product.id} id={product.id}>
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
