import { useNavigate, useParams } from "react-router-dom";

const ShowProduct = () => {
  const { id, slug } = useParams();
  const navigate = useNavigate();

  if (+id == 404) {
    return <h1>Page not found !</h1>;
  }

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <>
      <h1>Hello i am a product</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
        deserunt!
      </p>
      <button onClick={redirectToHome}>Redirect to Home</button>
    </>
  );
};

export default ShowProduct;
