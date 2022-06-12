const vehicles = require("../data/vehicles");

const list = (req, res) => {
  res.json(vehicles);
};

const show = //get vehicles with ID
  (req, res) => {
    // console.log(req.params._id)
    const foundItem = vehicles.find(
      (item, index, arr) => item._id === Number(req.params.id)
    );

    // console.log(foundItem)
    res.json(foundItem);
  };

const create = // add another vehicles
  (req, res) => {
    const length = vehicles.length;

    const newVehicle = {
      _id: length + 1,
      ...req.body,
    };

    vehicles.push(newVehicle);

    res.json(vehicles);
  };

module.exports = {
  list,
  show,
  create,
};
