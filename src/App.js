import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <div className='App'>
        <Products />
        <h1>Coding</h1>
      </div>
    </>
  );
}

export default App;
