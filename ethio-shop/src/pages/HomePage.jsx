import { useState, useEffect } from "react";

// Sample data.json inline
const productsData = [
  {
    id: 1,
    title: "Traditional Tigray Art",
    summary: "Handmade Tigray art that reflects Ethiopian culture and tradition.",
    image: "/image/tigray.png",
    detail: "Unique traditional art with symbolic patterns.",
    ingredients: ["Wood base", "Natural colors", "Cultural patterns"],
    instructions: ["Craft base", "Design patterns", "Paint carefully", "Polish and finish"]
  },
  {
    id: 2,
    title: "Ethiopian Kemis Dress",
    summary: "A handwoven traditional Kemis with colorful embroidery.",
    image: "/image/kemis1.png",
    detail: "Made with cotton and embroidered borders.",
    ingredients: ["Cotton fabric", "Embroidery thread", "Cultural design"],
    instructions: ["Weave cotton", "Sew dress", "Add embroidery", "Finalize with cultural patterns"]
  }
];

function HomePage() {
  // --- Header State ---
  const [shopOpen, setShopOpen] = useState(false);
  const [query, setQuery] = useState("");

  // --- HeroPage State ---
  const heroImages = [
    "bg-[url('/image/home1.png')]",
    "bg-[url('/image/home2.png')]",
    "bg-[url('/image/jebena.png')]"
  ];
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // --- ProductCard State ---
  const [products, setProducts] = useState(productsData);
  const [selectedId, setSelectedId] = useState(null); // selected product to show details

  // Filter products if search query is typed
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = () => {
    console.log("Searching for:", query);
  };

  const selectProduct = (id) => {
    setSelectedId(id);
  };

  // --- Selected Product Detail ---
  const selectedProduct =
    selectedId !== null
      ? products.find((p) => p.id === selectedId)
      : null;

  return (
    <div>
      {/* --- Header --- */}
      <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <div className="text-xl font-bold">EthioShop</div>
          <div className="hidden md:flex space-x-4">
            <a href="#">Home</a>
            <div className="relative">
              <button onClick={() => setShopOpen(!shopOpen)}>
                Shop {shopOpen ? "▲" : "▼"}
              </button>
              {shopOpen && (
                <ul className="absolute bg-blue-100 shadow-md mt-1 p-2 rounded">
                  <li><a href="#">Material</a></li>
                  <li><a href="#">Art</a></li>
                  <li><a href="#">Dresses</a></li>
                </ul>
              )}
            </div>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="flex mt-2 md:mt-0">
          <input
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="border rounded-l px-2 py-1"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white px-3 rounded-r"
          >
            🔍
          </button>
        </div>
      </header>

      {/* --- HeroPage --- */}
      <div
        className={`h-screen bg-cover bg-center ${heroImages[slide]} flex items-center justify-center transition-all duration-1000`}
      >
        <div className="flex flex-col items-center gap-6">
          <h1 className="text-white text-4xl font-bold text-center">
            Bring Ethiopian Culture to Your Home
          </h1>
          <button className="bg-purple-500 w-40 text-white px-4 py-2 rounded hover:bg-purple-600 transition">
            Shop Now
          </button>
        </div>
      </div>

      {/* --- ProductCard --- */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto p-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer"
              onClick={() => selectProduct(product.id)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-center">{product.summary}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- ProductCardDetail --- */}
      {selectedProduct && (
        <section className="max-w-4xl mx-auto p-6 flex flex-col items-center bg-white shadow-md rounded-lg mb-10">
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
          />
          <h2 className="text-3xl font-bold mb-4 text-center">{selectedProduct.title}</h2>
          <p className="text-gray-700 text-center mb-6">{selectedProduct.summary}</p>

          <div className="w-full">
            <h3 className="text-2xl font-semibold mb-2">Details:</h3>
            <p className="text-gray-600 mb-4">{selectedProduct.detail}</p>

            <h3 className="text-2xl font-semibold mb-2">Ingredients / Materials:</h3>
            <ul className="list-disc ml-5 mb-4">
              {selectedProduct.ingredients.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="text-2xl font-semibold mb-2 mt-4">Process:</h3>
            <ol className="list-decimal ml-5">
              {selectedProduct.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;
