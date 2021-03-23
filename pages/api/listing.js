export default (req, res) => {
  res.status(200).json({
    model: "Tesla Model 3 2018",
    price: "180",
    rating: "4.3",
    trips: "12",
  });
};
