const dishSchema = require("../schemas/dishes");

const getDishes = async (req, res, next) => {
  try {
    const dishes = await dishSchema.find({});

    return res.json(dishes);
  } catch (error) {
    next(error);
  }
};

const getDish = async (req, res, next) => {
  try {
    const { id } = req.params;

    const dish = await dishSchema.findById(id);

    if (!dish) return res.sendStatus(404);

    return res.json(dish);
  } catch (error) {
    next(error);
  }
};

const createDish = async (req, res, next) => {
  try {
    const newDish = new dishSchema(req.body);

    const savedDish = await newDish.save();

    return res.json(savedDish);
  } catch (error) {
    next(error);
  }
};

const updateDish = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newDishInfo = req.body;

    const dishUpdate = await dishSchema.findByIdAndUpdate(id, newProductInfo, {
      new: true
    });

    return res.json(dishUpdate);
  } catch (error) {
    next(error);
  }
};

const deleteDish = async (req, res, next) => {
  try {
    const { id } = req.params;

    const productDelete = await dishSchema.findByIdAndRemove(id);

    if (!productDelete) return res.sendStatus(404);

    return res.json(productDelete);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getDishes,
  getDish,
  createDish,
  updateDish,
  deleteDish
};
