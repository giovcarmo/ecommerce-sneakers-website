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
        <BrowserRouter basename="/ecomerce-website-sneakers">
          <ECommerceHeader />
          <Routes>
            <Route path="/ecomerce-website-sneakers/men" element={<MenProductsPage />} />
            <Route path="/ecomerce-website-sneakers/women" element={<WomenProductsPage />} />
            <Route path="/ecomerce-website-sneakers/" element={<ProductsPage />} />
            <Route path="/ecomerce-website-sneakers/about" element={<About />} />
            <Route path="/ecomerce-website-sneakers/contact" element={<Contact />} />
            <Route path="/ecomerce-website-sneakers/checkout" element={<Checkout />} />
            <Route path="/ecomerce-website-sneakers/delivery" element={<Delivery />} />
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
