import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ProductsPages from "./pages/ProductsPages";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductsPages />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
