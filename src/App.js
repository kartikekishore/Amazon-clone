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
      <Body />
      <Footer />
    </div>
  );
}

export default App;
