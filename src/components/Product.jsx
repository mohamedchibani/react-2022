import PropTypes from "prop-types";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Product = ({ children, id }) => {
  const { deleteProduct } = useContext(ProductContext);

  return (
    <>
      <div className='my-4'>
        <div className='card border-primary mb-3'>{children}</div>
        <button onClick={() => deleteProduct(id)} class='btn btn-danger btn-sm'>
          Delete
        </button>
      </div>
    </>
  );
};

Product.propTypes = {
  label: PropTypes.string,
  price: PropTypes.number.isRequired,
};

Product.defaultProps = {
  label: "my product",
  price: 0,
};

export default Product;
