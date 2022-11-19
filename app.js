const express = require("express");
const productsRoute = require("./routes/products/index");
const app = express();

app.use(express.json());

app.get("/user", (req, res) => {
  res.json({ nombre: "alan" });
});
app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("hola mundo");
});

app.listen(3000, () => {
  console.log("server on port 3000");
});
