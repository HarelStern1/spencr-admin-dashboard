import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LayoutContextProvider from "./context/LayoutContext";
import Analytics from "./pages/Aalalytics/Analytics";
import AddProduct from "./pages/AddProduct/AddProduct";
import Products from "./pages/Products/Products";

const App = () => {
  return (
    <LayoutContextProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<AddProduct />} />
        </Routes>
      </Layout>
    </LayoutContextProvider>
  );
};

export default App;
