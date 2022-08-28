const mongoose = require("mongoose");

const ofertSchema = mongoose.Schema({
  autor: { type: String, required: true, trim: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  date: {
    type: String,
    required: true,
    trim: true
  },
  tags: { type: [String], required: true, trim: true }
});

ofertSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.updatedAt;
  }
});

module.exports = mongoose.model("oferts", ofertSchema);
