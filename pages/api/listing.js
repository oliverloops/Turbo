// API request - Logic refactored for API routes
export async function getData() {
  // Check environment [dev/prod]
  const dev = process.env.NEXT_PUBLIC_VERCEL_ENV !== "production";
  const baseURL = dev
    ? "http://localhost:3000"
    : `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  const response = await fetch(new URL("/api/listing", baseURL))
    .then((res) => res.json())
    .then((data) => data);

  return response;
}

export default (req, res) => {
  res.status(200).json({
    model: "Tesla Model 3 2018",
    price: "180",
    rating: "4.3",
    trips: "12",
  });
};
