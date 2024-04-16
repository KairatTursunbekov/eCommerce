import  React  from "react";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Headers/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Items } from "./Components/Items/items";
import { CartProvider } from "react-use-cart";
import { Cart } from "./Components/Cart/Cart";




function App() {
  return (
    <CartProvider>
      <div className="wrapper">
        <Header />
        <Items />
        <Footer />
        {/* <Cart /> */}
      </div>
    </CartProvider>
  );
}
export default App;
