const ofertSchema = require("../schemas/oferts");

const getOferts = async (req, res, next) => {
  try {
    const oferts = await ofertSchema.find({});

    return res.json(oferts);
  } catch (error) {
    next(error);
  }
};

const getOfert = async (req, res, next) => {
  try {
    const { id } = req.params;

    const ofert = await ofertSchema.findById(id);

    if (!ofert) return res.sendStatus(404);

    return res.json(ofert);
  } catch (error) {
    next(error);
  }
};

const createOfert = async (req, res, next) => {
  try {
    const newOfert = new ofertSchema(req.body);
    console.log(req.body);

    const tags = newOfert.tags.toString().split(",");
    newOfert.tags = tags;

    const firstPartDate = new Date().toLocaleString([], {
      year: "numeric",
      month: "long",
      day: "numeric"
    });

    const secondPartDate = new Date().toLocaleString([], {
      hour: "numeric",
      minute: "numeric"
    });

    newOfert.date = firstPartDate + " a las " + secondPartDate;

    const savedOfert = await newOfert.save();

    return res.json(savedOfert);
  } catch (error) {
    next(error);
  }
};

const updateOfert = async (req, res, next) => {
  try {
    const { id } = req.params;
    const newOfertInfo = req.body;

    const ofertUpdate = await ofertSchema.findByIdAndUpdate(id, newOfertInfo, {
      new: true
    });

    return res.json(ofertUpdate);
  } catch (error) {
    next(error);
  }
};

const deleteOfert = async (req, res, next) => {
  try {
    const { id } = req.params;

    const ofertDelete = await ofertSchema.findByIdAndRemove(id);

    if (!ofertDelete) return res.sendStatus(404);

    return res.json(ofertDelete);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getOferts,
  getOfert,
  createOfert,
  updateOfert,
  deleteOfert
};
