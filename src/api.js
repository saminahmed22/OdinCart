export default async function fetchItems() {
  const url = "https://fakestoreapi.com/products";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return "Error";
    }
    return await response.json();
  } catch (error) {
    return "Error";
  }
}
