import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ProductCard = ({ product, index, handleScroll }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: index * 0.2, // Stagger effect
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "top 50%",
        },
      }
    );
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-full h-[350px] overflow-hidden rounded-t-2xl bg-gray-200">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover hover:scale-110 hover:opacity-90 transition-all duration-300"
          onClick={() => handleScroll(product.id)}
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-black mb-2">
            <a href={`/products/${product.id}`}>{product.name}</a>
          </h3>
          <p className="text-gray-600 line-clamp-2">{product.description}</p>
        </div>
        <div
          className="flex items-center justify-between w-full"
          onClick={() => handleScroll(product.id)}
        >
          <button className="px-4 py-2 w-full hover:bg-gray-500 cursor-pointer bg-primary text-white rounded-full hover:opacity-90 transition-all">
            View product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
