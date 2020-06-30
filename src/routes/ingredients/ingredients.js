const Ingredient = require("../../modules/db/schemas/ingredients");

const addIngredients = (req, res) => {
  const ingredient = req.body;

  const newIngredient = new Ingredient(ingredient);

  newIngredient
    .save()
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
};

module.exports = addIngredients;
