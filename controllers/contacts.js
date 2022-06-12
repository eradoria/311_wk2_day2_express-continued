const contacts = require("../data/contacts");

const list = //get contacts
  (req, res) => {
    res.json(contacts);
  };

const show = //get contact with ID
  (req, res) => {
    console.log(req.params._id);
    const foundItem = contacts.find(
      (item, index, arr) => item._id === Number(req.params.id)
    );

    // console.log(foundItem)
    res.json(foundItem);
  };

const create = // add another contact
  (req, res) => {
    const length = contacts.length;

    const newPerson = {
      _id: length + 1,
      ...req.body,
    };

    contacts.push(newPerson);

    res.json(contacts);
  };

module.exports = {
  list,
  show,
  create,
};
