
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

import { Outlet } from "react-router-dom"; 

const Layout = () => {
  return (
    <div className="w-screen max-w-full  min-h-screen ">
    
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;



