import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState } from "react";

const ShowProduct = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const myProduct = products.find((product) => product.id === +id);

  const [product, setProduct] = useState(myProduct);

  return (
    <>
      <h1>{product.label}</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
        deserunt!
      </p>
      <button className='btn btn-success'>{product.price}</button>
    </>
  );
};

export default ShowProduct;
