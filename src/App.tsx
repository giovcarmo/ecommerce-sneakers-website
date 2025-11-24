import { ECommerceContent } from "./components/ECommerceContent/ECommerceContent";
import { ECommerceHeader } from "./components/ECommerceHeader/ECommerceHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsPage } from "./components/Pages/HomePage";
import { MenProductsPage } from "./components/ProductsPerGender/Men";
import { WomenProductsPage } from "./components/ProductsPerGender/Women";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import { ThemeProvider } from "./components/ECommerceThemeButton/ECommerceThemeButton"
import { Checkout } from "./components/Pages/Checkout";
import { CartProvider } from "./Contexts/CartContext";
import { Delivery } from "./components/Pages/Delivery";
function App() {

  return (
    <CartProvider>
      <ThemeProvider>
        <BrowserRouter basename="/ecomerce-website-sneakers/">
          <ECommerceHeader />
          <Routes>
            <Route path="/men" element={<MenProductsPage />} />
            <Route path="/women" element={<WomenProductsPage />} />
            <Route path="/" element={<ProductsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route
              path="/product/:id"
              element={
                <ECommerceContent />
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CartProvider>
  );
}
export default App
