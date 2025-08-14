import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa6";
import HlightLogo from "../../assets/HlightLogo.avif";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const textRef = useRef([]);
  const socialRef = useRef([]);

    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: "auto",
        });
      }
    };

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 50%",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.from(socialRef.current, {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          end: "top 60%",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
      });
    }
  }, []);

  return (
    <div ref={footerRef} className="w-full h-fit bg-primary text-white pb-3">
      <div className="flex flex-col md:flex-row justify-between max-sm:items-center items-start mb-10 w-full py-12 px-8 md:px-16">
        {/* Brand Logo */}
        <div className="mb-8 md:mb-0">
          <img
            src={HlightLogo}
            alt="Logo"
            ref={(el) => textRef.current.push(el)}
            loading="lazy"
          />
        </div>

        {/* Navigation */}

        <div className="flex flex-col md:flex-row gap-8 md:gap-16">
          <nav>
            <ul className="flex flex-col items-center md:flex-row gap-4 md:gap-10">
              {["Home", "Products", "About us", "Contact us"].map(
                (item, index) => {
                  const path =
                    item === "Home"
                      ? "/"
                      : `/${item.replace(/\s+/g, "").toLowerCase()}`;
                  return (
                    <li key={index} ref={(el) => textRef.current.push(el)}>
                      <Link
                        to={path}
                        className="hover:text-gray-300 transition-colors"
                        onClick={() => handleScroll("home")}
                      >
                        {item}
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center gap-6 mb-8">
        <a
          href="https://www.instagram.com/safeguard_airo?utm_source=qr&igsh=dnF1MWd6N2t2M2Jt"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
          ref={(el) => socialRef.current.push(el)}
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/company/safeguard-airo"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
          ref={(el) => socialRef.current.push(el)}
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61574564712758"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
          ref={(el) => socialRef.current.push(el)}
        >
          <FaFacebook size={24} />
        </a>
        <a
          href="https://x.com/Safeguardair"
          target="_blank"
          className="text-white hover:text-gray-300 transition-colors"
          ref={(el) => socialRef.current.push(el)}
        >
          <FaXTwitter size={24} />
        </a>
      </div>

      {/* Copyright */}
      <div
        className="text-center text-sm"
        ref={(el) => textRef.current.push(el)}
      >
        <p>© 2025 By Mythri InnovoTech Solutions Pvt Ltd</p>
      </div>
    </div>
  );
};

export default Footer;
