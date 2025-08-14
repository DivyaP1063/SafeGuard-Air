import  { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import HlightLogo from "../../assets/HlightLogo.avif";
import HdarkLogo from "../../assets/HdarkLogo.avif";

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isProductsPage = location.pathname.startsWith("/products");
  const isContactPage = location.pathname.startsWith("/contactus");
  const isProductPage = location.pathname.startsWith("/product");
  const isAboutPage = location.pathname.startsWith("/aboutus");

  const navItemsForDefault = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "ourfeature", name: "Features" },
    { id: "products", name: "Products" },
    { id: "testimonials", name: "Testimonials" },
    { id: "contactus", name: "Contact Us" },
  ];

  const navItemsForProductPage = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "products", name: "Products" },
    { id: "contactus", name: "Contact Us" },
  ];
    const navItemsForProductsPage = [
      { id: "home", name: "Home" },
      { id: "about", name: "About Us" },
      { id: "contactus", name: "Contact Us" },
    ];
    const navItemsForAboutPage = [
          { id: "home", name: "Home" },
          { id: "products", name: "Products" },
          { id: "contactus", name: "Contact Us" },
    ];

  const navItems = isProductsPage
    ? navItemsForProductsPage
    : isProductPage
    ? navItemsForProductPage
    : isAboutPage
    ? navItemsForAboutPage
    : navItemsForDefault;

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };



  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".logo", { opacity: 0, y: -30, duration: 0.5, delay: 0.5 });
    tl.from(".navlink", { opacity: 0, y: -30, duration: 0.5, stagger: 0.1 });
  }, []);



  return (
    <header
      id="home"
      className={`absolute  z-10 top-0 w-full transition-all duration-300 flex max-lg:px-1 justify-center mt-[25px]`}
    >
      <div
        className={`flex justify-between items-center max-lg:w-full w-[90%] px-6  py-2 backdrop-blur-md ${
          isProductPage ? "bg-primary" : "bg-white/10"
        } rounded-4xl`}
      >
        {/* Logo */}
        <Link to="/" className="text-xl md:text-3xl font-extrabold logo">
          <div className="h-[50px] w-[200px] max-lg:w-[150px] max-lg:h-[40px] max-sm:w-[120px] max-sm:h-[30px]">
            <img
              className="text-black h-full w-full object-cover"
              onClick={() => handleScroll("home")}
              src={isContactPage ? HdarkLogo : HlightLogo}
              alt="Logo"
              loading="lazy"
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden max-sm:text-xl text-2xl ${
            isContactPage && "max-md:text-primary"
          } text-white`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <nav
          className={`md:flex max-sm:gap-4 gap-7 max-lg:gap-3 items-center  text-lg max-lg:text-base font-semibold ${
            menuOpen
              ? "flex flex-col absolute bg-gray-500 top-16 left-0 w-full py-5 max-md:shadow-lg rounded-md"
              : "hidden"
          } md:flex-row md:static md:bg-transparent`}
        >
          {isContactPage ? (
            <Link to="/">
              <div
                className={`flex items-center gap-2 max-md:text-black cursor-pointer transition-all duration-300  text-white hover:text-gray-600`}
              >
                Home
              </div>
            </Link>
          ) : (
            navItems.map((item) => (
              <div key={item.id} className="relative navlink">
                {item.id === "contactus" ? (
                  <Link to="/contactus">
                    <div className="px-5 py-2 font-bold hover:text-white rounded-full transition-all duration-300 bg-gray-300 hover:bg-gray-700">
                      Contact Us
                    </div>
                  </Link>
                ) : item.id === "products" ? (
                  <Link to="https://shophub-frontend.onrender.com/products">
                    <div
                      className="flex p-2 items-center gap-2 cursor-pointer text-white transition-all hover:border-1 hover:rounded-2xl duration-300"
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.name}
                    </div>
                  </Link>
                ) : item.id === "about" ? (
                  <Link to="/aboutus">
                    <div
                      className="flex p-2 items-center gap-2 cursor-pointer text-white transition-all hover:border-1 hover:rounded-2xl duration-300"
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.name}
                    </div>
                  </Link>
                ) : item.id === "home" ? (
                  <Link to="/">
                    <div
                      className="flex p-2 items-center gap-2 cursor-pointer text-white transition-all hover:border-1 hover:rounded-2xl duration-300"
                      onClick={() => handleScroll(item.id)}
                    >
                      {item.name}
                    </div>
                  </Link>
                ) : (
                  <div
                    className="flex p-2 items-center gap-2 cursor-pointer text-white transition-all hover:border-1 hover:rounded-2xl duration-300"
                    onClick={() => handleScroll(item.id)}
                  >
                    {item.name}
                  </div>
                )}
              </div>
            ))
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
