import ProductCard from "../components/ProductPage/ProductCard";
import Product1 from "../assets/NEW black Monitor.avif";
import Product2 from "../assets/productImg4.avif";
import Product3 from "../assets/productImg5.avif";
import Product4 from "../assets/productImg6.avif";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const broadKeywords = [
  "Air quality improvement",
  "Air purification for homes",
  "Air monitor for babies",
  "Air purifiers for allergies",
  "Air purifier for elderly",
  "HEPA filter technology",
  "Health and wellness devices",
  "Anti-pollution devices",
  "Home automation air devices",
  "Air quality monitoring solutions",
  "Air purifier with sensors",
  "Medical-grade air purifier",
  "PM2.5 and PM10 monitoring",
  "Air quality safety gadgets",
  "VOC detection device",
  "Healthcare air purifiers",
  "Breathing safety technology",
  "Smart air quality solutions",
  "Sustainable air purification",
  "Smart home air devices",
  "Advanced air purification",
  "Eco-friendly air purifiers",
  "Odor removal purifiers",
  "Air quality apps and monitors",
  "Smart health gadgets",
  "Anti-allergy air filters",
  "Dust removal air purifier",
  "Formaldehyde detection system",
  "Carbon air filtration",
  "Air purifier for hospitals",
  "Fresh air technology",
  "Air purification for newborns",
  "Remote-controlled air purifiers",
  "Respiratory health solutions",
  "Low noise air purifier",
  "Air purifier maintenance",
  "Air filtration innovation",
  "Home environment health",
  "Air purifiers for kids",
  "Industrial air quality monitor",
];

// Product data
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

const Products = () => {
 const navigate = useNavigate();
    const handleScroll = (id) => {
      navigate(`/product/${id}`);
      const element = document.getElementById("home");
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 50,
          behavior: "auto",
        });
      }
    };

  return (
    <div>
      <Helmet>
        <title>Products</title>
        <meta
          name="description"
          content="Showcase of smart air monitoring and wellness devices."
        />
        <meta name="keywords" content={broadKeywords.join(", ")} />
      </Helmet>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 mt-[100px]">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-black mb-4">Products</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our collection of premium Air Quality monitoring and
            Purifier designed to deliver exceptional air quality for every
            lifestyle.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex max-sm:flex-col justify-between items-center text-center">
            <div className="mb-4 w-full sm:w-auto">
              <span className="text-sm text-gray-600">
                Showing all {products.length} products
              </span>
            </div>

            <div className="flex flex-wrap gap-4 mb-4">
              <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors">
                All Products
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleScroll={handleScroll}
            />
          ))}
        </div>
      </main>

    </div>
  );
};

export default Products;
