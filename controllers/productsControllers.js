const products = ["zapatos", "remeras"];

//Read get
const getProducts = (req, res) => {
  res.json({ products: products });
};

//create POST
const createProduct = (req, res) => {
  products.push(req.body.product);
  res.status(201).send();
};

//delete delete

const deleteProduct = (req, res) => {
  const index = req.params.id;
  products.splice(index, 1);
  res.send(200).send();
};

//update

const updateProduct = (req, res) => {
  const index = req.params.id;
  products[index] = req.body.product;
  res.status(200).send();
};
module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
