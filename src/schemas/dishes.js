const mongoose = require("mongoose");

const dishSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    ingredients: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

dishSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  }
});

module.exports = mongoose.model("dishes", dishSchema);
