const comments = require("../data/comments");

const list = //get all comments
  (req, res) => {
    res.json(comments);
  };

const show = //get comment with ID
  (req, res) => {
    // console.log(req.params._id)
    const foundItem = comments.find(
      (item, index, arr) => item._id === Number(req.params.id)
    );

    // console.log(foundItem)
    res.json(foundItem);
  };

const create = //////////// add new comment
  (req, res) => {
    const length = comments.length;

    const newComment = {
      _id: length + 1,
      ...req.body,
    };

    comments.push(newComment);

    res.json(comments);
  };

module.exports = {
  list,
  show,
  create,
};
