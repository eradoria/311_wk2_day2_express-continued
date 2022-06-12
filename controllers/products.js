const products = require("../data/products");

const list = //get contacts
  (req, res) => {
    res.json(products);
  };

const show = //get product with ID
  (req, res) => {
    console.log(req.params._id);
    const foundItem = products.find(
      (item, index, arr) => item._id === Number(req.params.id)
    );

    // console.log(foundItem)
    res.json(foundItem);
  };

const create = (req, res) => {
  const length = products.length;

  const newProduct = {
    _id: length + 1,
    ...req.body,
  };

  products.push(newProduct);

  res.json(products);
};

module.exports = {
  list,
  show,
  create,
};
