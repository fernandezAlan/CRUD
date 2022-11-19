const express = require("express");
const productsControllers = require("../../controllers/productsControllers");
const AuthMidd = require("../../middlewares/Auth");
const route = express.Router();
route.get("/", productsControllers.getProducts);
route.post("/", AuthMidd, productsControllers.createProduct);
route.put("/:id", AuthMidd, productsControllers.updateProduct);
route.delete("/:id", productsControllers.deleteProduct);

route.get("/ropa", function (req, res) {
  res.json({ product: "remera" });
});

module.exports = route;
