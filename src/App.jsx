import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout.jsx"; 
import { ToastContainer } from "react-toastify";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
// const Products = lazy(() => import("./pages/Products"));
// const Product = lazy(() => import("./pages/Product"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-screen min-h-screen flex items-center justify-center">
          <div className="loader_new"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          {/* <Route path="products" element={<Products />} />
          <Route path="product/:id" element={<Product />} /> */}
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
