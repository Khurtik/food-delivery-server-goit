const Comments = require("../../modules/db/schemas/comments");

const getComments = (req, res) => {
  const id = req.query.productId.toString().slice(1, -1);

  const sendError = () => {
    res.status(400);
    res.json({
      status: "error",
    });
  };

  const sendResponse = (newComments) => {
    if (!newComments) {
      return sendError();
    }
  };

  Comments.find()
    .where("product")
    .in(id)
    .then((comments) => {
      if (!comments.length) {
        res.json({
          status: "success",
          comments: [],
        });
        return;
      }

      sendResponse(comments, response);
    })
    .catch(() => {
      sendError(res, "Comments");
    });
};

module.exports = getComments;
