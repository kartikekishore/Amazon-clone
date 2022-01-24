import { Routes, Route } from "react-router-dom";

import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import ProductDetails from "./views/ProductDetails";
import ProductsByCategory from "./views/ProductsByCategory";
import Cart from "./views/Cart";

function App() {
  return (
    <div className="App">
      {/* <h1>Amazon Store</h1> */}
      <Header />
      <Routes>
            <Route path="/" element={ <Body />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/categories/:categoryId" element={<ProductsByCategory />} />
        </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
