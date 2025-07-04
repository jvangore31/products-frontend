import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleProductAdded = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductForm onProductAdded={handleProductAdded} />
      <ul className="mt-4 space-y-2">
        {products.map((product) => (
          <li key={product.id} className="border p-2 rounded">
            {product.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
