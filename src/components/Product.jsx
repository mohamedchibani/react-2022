import PropTypes from "prop-types";

const Product = ({ children, onDeleteProduct, id }) => {
  return (
    <>
      <div className='my-4'>
        <div className='card border-primary mb-3'>{children}</div>
        <button
          onClick={() => onDeleteProduct(id)}
          class='btn btn-danger btn-sm'
        >
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
