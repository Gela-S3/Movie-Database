import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductCardDetail from "./components/ProductCardDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductCardDetail />} />
        <Route
          path="*"
          element={<p className="text-center mt-10 text-red-500">Page not found</p>}
        />
      </Routes>
    </Router>
  );
}

export default App;
