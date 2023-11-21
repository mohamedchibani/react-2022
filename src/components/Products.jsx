import { useState } from "react";
import Counter from "./Counter";
import Product from "./Product";
import { v4 as uuid } from "uuid";

function Products() {
  let showList = true;

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("");

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

  const titleInput = (e) => {
    if (e.target.value === "") {
      setMessage("Title is required");
    } else if (e.target.value.trim().length <= 3) {
      setMessage("Please tape at least 3 caracters");
    } else {
      setMessage("");
      setTitle(e.target.value);
    }
  };

  const priceInput = (e) => {
    setPrice(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    let myProduct = {
      id: uuid(),
      label: title,
      price,
    };

    if (title === "") {
      setMessage("Title is required");
    } else if (title) setProducts([myProduct, ...products]);
    setTitle("");
    setPrice(0);
  };

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsam
        sint tenetur sapiente .
      </p>
      <form onSubmit={submitForm}>
        <div className='form-group'>
          <label htmlFor='' class='form-label'>
            Title
          </label>
          <input
            defaultValue={title}
            onChange={titleInput}
            className='form-control'
            type='text'
          />
          {message && <div className='alert alert-danger'>{message}</div>}
        </div>
        <div className='form-group'>
          <label htmlFor='' class='form-label'>
            Price
          </label>
          <input
            defaultValue={price}
            onChange={priceInput}
            className='form-control'
            type='number'
          />
        </div>
        <button class='btn btn-primary my-2 mb-4'>Save</button>
      </form>
      {title} - {price}
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
