import React, { useState ,useEffect,useRef } from "react";
import { Link, useParams } from "react-router-dom";
import { FaWhatsapp, FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import Product1 from "../assets/NEW black Monitor.avif";
import Product12 from "../assets/NEW white Monitor.avif";
import Product2 from "../assets/productImg4.avif";
import Product3 from "../assets/productImg5.avif";
import Product4 from "../assets/productImg6.avif";
import { Helmet } from "react-helmet";

const longTailKeywords = [
  "Best air quality monitor for home use",
  "Smart air purifier with HEPA filter",
  "Air quality monitor for hospitals",
  "Medical-grade air purifier for clinics",
  "PM2.5 and VOC air pollution detector",
  "Air purifier with auto calibration and sensors",
  "Air purifier safe for newborn babies",
  "Best air quality sensor for respiratory health",
  "Compact air monitor for elderly homes",
  "Air quality monitoring for medical organizations",
  "Indoor air pollution monitoring device",
  "Wireless air quality monitor for homes",
  "Portable air purifier for traveling",
  "Smart air purifier for large rooms",
  "Affordable air quality monitors for families",
  "Best air purifier for allergy sufferers",
  "High-accuracy air quality detection device",
  "Air purifier that removes pet dander",
  "Real-time air quality monitoring system",
  "Air purification device for chronic lung patients",
  "Air monitor compatible with smart home",
  "Air quality device with app control",
  "Advanced air purifier with calibration system",
  "Energy-efficient air quality monitor",
  "Silent air purifier for bedrooms",
  "Air purifier for asthma patients",
  "Formaldehyde and VOC removal purifier",
  "Hospital-grade air filtration system",
  "Best air purifier for newborn baby room",
  "Air purifier for elderly care homes",
  "Air quality monitor for schools and hospitals",
  "Automatic air quality control device",
  "Multi-room air quality monitoring system",
  "Environment safety devices for homes",
  "Air purifiers with real-time pollutant tracking",
  "Compact air cleaner for cars and homes",
  "Air quality solutions for urban homes",
  "VOC monitoring device for indoor air",
  "Air purifier designed for sensitive lungs",
  "Automatic calibration air purifier for health clinics",
  "Air purifier that removes bacteria and viruses",
  "Best device to monitor air quality 24/7",
  "AI-powered air purification system",
  "Indoor air purification solutions for kids",
  "Smart home air safety devices",
  "Long-lasting air purifier filters",
  "Air cleaner with medical-grade HEPA filter",
  "Air purifier that syncs with mobile app",
  "Real-time dust and allergen removal",
  "Top-rated air purifiers for elderly wellness",
];

const products = [
  {
    id: 1,
    name: "Air Quality Monitor : SafeGuard AirSense",
    description:
      "Monitor and improve your indoor and outdoor air quality with SafeGuard AirSense",
    image: Product1,
    features: [
      "Real-time air quality monitoring",
      "High-precision air quality sensors",
      "Compact and portable design",
      "Multi-color LED indicator for air quality levels",
      "USB-powered with low energy consumption",
    ],
    specification: {
      Generic:
        "Supply voltage	4.5	V	/n Operating temperature range [°C]	-10 - 50	°C",
      ParticulateMatter:
        "Mass Concentration precision ±10 %/nMass Concentration range 0-1000µg/m³/nLifetime >10 years/nPartical size range PM1.0 PM2.5 PM4 and PM10 ",
      VOC: "Processed output 0-500 VOC Index/nMeasurement range	0 - 1000	ppm/nResponse time (τ63%)	< 10	s/nDevice-to-device var.	15 - 15	% m.v.",
      Humidity:
        "Typ. relative humidity accuracy	4.5	%RH/nOperating relative humidity range	0 - 90	%RH/nResponse time (τ63%)	20	s",
      Temperature:
        "Typ. temperature accuracy	0.45	°C/nResponse time (τ63%) < 60	s",
    },
  },
  {
    id: 2,
    name: "Car Air Purifier : SafeGuard Air Ultra",
    description:
      "SafeGuard Air Ultra, the next-generation Car air purifier with advanced sensor monitoring.",
    image: Product2,
    features: [
      "Advanced HEPA and activated carbon filtration",
      "Effectively removes dust, smoke, and odors",
      "USB-powered for in-car use",
      "Dual USB ports for convenience",
      "Compact and stylish design for car interiors",
    ],
    specification: {
      RateVoltage: "DC 5V",
      InputPower: "0.6W",
      NegativeIon: "1×10⁷ pcs/cm³",
      ProductSize: "Φ65×H158mm",
      SuitableArea: "<10m²",
      Material: "ABS",
      FanSpeed: "Low-High",
      Other:
        "Composite HEPA & active carbon filter, with USB cord, colorful decorative lamp, dual USB, anti-slip rubber, aroma box",
    },
  },
  {
    id: 3,
    name: "Home Air Purifier : SafeGuard Air Pro",
    description:
      "SafeGuard Air Pro, the next-generation Home air purifier with advanced sensor monitoring.",
    image: Product3,
    features: [
      "Powerful HEPA filtration for home use",
      "Eliminates allergens, dust, and pet dander",
      "Silent operation for a peaceful environment",
      "Smart air quality detection with LED indicator",
      "Aroma box for added freshness",
    ],
    specification: {
      Color: "White with Digital PANEL",
      InputVoltage: "DC12V/1A",
      Power: "<5.5W",
      Dimension: "163×163×256MM",
      CADR: "100m³/h",
      PowerSupply: "Type-C interface",
      Noise: "48dB",
      NegativeIon: "20 million pcs/cm³",
    },
  },
    {
      id: 4,
      name: "Safe Guard X : Coming Soon..!",
      description: "Will be released soon.",
      image: Product4,
      features: ["Will be released soon."],
      specification: {
        Release: "Will be released soon.",
      },
    },
];

const Product = () => {
  const [color,setColor] =useState("black");
  const { id } = useParams();
  const product =
    products.find((item) => item.id === parseInt(id)) || products[0];

  const [expandedSection, setExpandedSection] = useState("Specification");

  const productImageRef = useRef(null);
  const productDetailsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      productImageRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
    gsap.fromTo(
      productDetailsRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out", delay: 0.5 }
    );
  }, [id]);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center ">
      <Helmet>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
        <meta name="keywords" content={longTailKeywords.join(", ")} />
      </Helmet>

      <div className="py-[50px] sm:py-[60px] bg-primary w-full" />
      <div className="w-[90%] py-6 max-sm:mt-[30px] mt-[50px] mb-[50px] flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2" ref={productImageRef}>
          <img
            src={color == "black" ? product.image : Product12}
            alt={product.name}
            loading="lazy"
            className={`w-full ${
              id == 4
                ? "sm:h-[500px] object-cover object-top"
                : "h-auto object-contain"
            }   bg-gray-100 rounded-3xl`}
          />
        </div>

        {/* Product Details */}
        <div
          className="md:w-1/2 flex flex-col items-center"
          ref={productDetailsRef}
        >
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4 text-xl">{product.description}</p>

          <div
            className={`${
              parseInt(id) === 1 ? "flex" : "hidden"
            } self-start mt-3 gap-1`}
          >
            <div
              onClick={() => setColor("black")}
              className="w-[40px] h-[40px] rounded-full border-2 border-b-blue-900 bg-black cursor-pointer"
            ></div>
            <div
              onClick={() => setColor("white")}
              className="w-[40px] h-[40px] rounded-full border-2 border-b-blue-900 bg-white cursor-pointer"
            ></div>
          </div>

          <Link to="/contactus" className="w-full">
            <button className="w-full bg-[#112B3C] text-white py-3 rounded-md mt-6 hover:bg-opacity-90 transition">
              Enquire
            </button>
          </Link>

          {/* Collapsible Sections */}
          <div className="mt-8 border-t pt-4 w-full">
            {/* Specification */}
            <div className="border-b pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("Specification")}
              >
                <h2 className="text-lg font-medium">SPECIFICATION</h2>
                <span className="text-2xl">
                  {expandedSection === "Specification" ? "−" : "+"}
                </span>
              </div>
              {expandedSection === "Specification" && (
                <div className="mt-4 text-gray-700">
                  <div>
                    {Object.entries(product.specification).map(
                      ([key, value]) => (
                        <p key={key}>
                          <strong>
                            {key.replace(/([A-Z])/g, " $1").trim()}:
                          </strong>{" "}
                          {value.split("/n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      )
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="border-b py-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection("features")}
              >
                <h2 className="text-lg font-medium">FEATURES</h2>
                <span className="text-2xl">
                  {expandedSection === "packingDetails" ? "−" : "+"}
                </span>
              </div>
              {expandedSection === "features" && (
                <div className="mt-4 text-gray-700">
                  <ul className="list-disc pl-6">
                    {product.features.map((val, key) => (
                      <li key={key}>
                        <strong>{val}:</strong>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Social Sharing */}
          <div className="mt-6 flex items-center gap-4">
            <a href="#" aria-label="Share on WhatsApp">
              <FaWhatsapp className="text-gray-600 text-xl" />
            </a>
            <a href="#" aria-label="Share on Facebook">
              <FaFacebook className="text-gray-600 text-xl" />
            </a>
            <a href="#" aria-label="Share on Pinterest">
              <FaPinterest className="text-gray-600 text-xl" />
            </a>
            <a href="#" aria-label="Share on Twitter">
              <FaTwitter className="text-gray-600 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
