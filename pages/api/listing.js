// API request - Logic refactored for API routes
export async function getData() {
  const response = await fetch("http://localhost:3000/api/listing");
  const data = await response.json();
  return data;
}

export default (req, res) => {
  res.status(200).json({
    model: "Tesla Model 3 2018",
    price: "180",
    rating: "4.3",
    trips: "12",
  });
};
