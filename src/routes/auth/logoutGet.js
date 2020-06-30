const logout = (request, response) => {
  response.status(200).send({
    success: "OK",
    message: "logout successfully",
  });
};

module.exports = logout;
