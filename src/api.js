export async function fetchProducts() {
  const response = await fetch('http://localhost:8080/api/products');
  if (!response.ok) throw new Error('Network response was not ok');
  return await response.json();
}
