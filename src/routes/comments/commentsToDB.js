const Comments = require("../../modules/db/schemas/comments");

const addComments = (req, res) => {
  const comment = req.body;

  const newComment = new Comments(comment);

  newComment
    .save()
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = addComments;
