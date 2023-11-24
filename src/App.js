import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import ArticleList from "./components/articles/ArticleList";
import Contact from "./components/Contact";
import ShowProduct from "./components/ShowProduct";

import { ProductProvider } from "./contexts/ProductContext";
import ArticleProvider from "./contexts/article/ArticleProvider";

function App() {
  return (
    <>
      <Router>
        <ProductProvider>
          <ArticleProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Products />} />
              <Route path='/product/:id' element={<ShowProduct />} />
              <Route path='/about' element={<About />} />
              <Route path='/blog' element={<ArticleList />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </ArticleProvider>
        </ProductProvider>
      </Router>
    </>
  );
}

export default App;
