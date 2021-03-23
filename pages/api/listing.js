// API request - Logic refactored for API routes
export async function getData() {
  // Check environment [dev/prod]
  const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";
  const server = dev
    ? "http://localhost:3000"
    : process.env.NEXT_PUBLIC_VERCEL_URL;

  const response = await fetch(`${server}/api/listing`);
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
