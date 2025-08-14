import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Bannerlarge from "../../assets/Bannerlarge.avif";
import Bannermedium from "../../assets/Bannermedium.avif";
import Bannersmall from "../../assets/Bannersmall.avif";

const Herosection = () => {




  useGSAP(() => {
    gsap.from(".hero-section", {
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
      stagger: 0.5,
    });
  }, []);



  return (
    <section className="w-full max-sm:h-fit lg:h-screen flex flex-col items-center  overflow-hidden">
      <div className="py-[40px] bg-primary w-full sm:hidden" />
      <div className="w-full h-fit hero-section relative  ">
        <img
          src={Bannerlarge}
          className="w-full h-full object-cover max-md:hidden "
          alt="Hero Banner"

        />
        <img
          src={Bannermedium}
          className="w-full h-full object-cover max-sm:hidden md:hidden "
          alt="Hero Banner"

        />
        <img
          src={Bannersmall}
          className="w-full h-full object-scale-down sm:hidden "
          alt="Hero Banner"

        />
      </div>
    </section>
  );
};

export default Herosection;
