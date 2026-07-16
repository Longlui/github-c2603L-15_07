import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />

      <Route path="/products" element={<ProductList />} />

      <Route path="/products/:id" element={<ProductDetail />} />

    </Routes>
  );
}

export default App;