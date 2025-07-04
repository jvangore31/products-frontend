import { useState } from "react";

export default function ProductForm({ onProductAdded }) {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    const response = await fetch("http://localhost:8080/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name }),
    });

    if (response.ok) {
      const newProduct = await response.json();
      onProductAdded(newProduct); // update list in parent
      setName(""); // clear input
    } else {
      console.error("Failed to create product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-x-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter product name"
        className="border px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded">
        Add Product
      </button>
    </form>
  );
}
