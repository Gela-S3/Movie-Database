import productsData from "../data.json";

export default function ProductCardDetail({ id }) {
  if (!id) return null;

  const product = productsData.find((p) => String(p.id) === String(id));

  if (!product)
    return (
      <p className="text-center text-red-500 mt-6">
        Product not found. ID: {id}
      </p>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
      />
      <h2 className="text-3xl font-bold mb-4 text-center">{product.title}</h2>
      <p className="text-gray-700 text-center mb-6">{product.summary}</p>

      <div className="w-full bg-white shadow-md rounded-lg p-4">
        <h3 className="text-2xl font-semibold mb-2">Details:</h3>
        <p className="text-gray-600 mb-4">{product.detail}</p>

        <h3 className="text-2xl font-semibold mb-2 mt-4">Ingredients / Materials:</h3>
        <ul className="list-disc ml-5 mb-4">
          {product.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="text-2xl font-semibold mb-2 mt-4">Process:</h3>
        <ol className="list-decimal ml-5">
          {product.instructions.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
