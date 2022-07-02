const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, unique: true, required: true, trim: true },

  password: { type: String, required: true, trim: true }
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    delete returnedObject.__v;
    delete returnedObject.password;
    delete returnedObject.updatedAt;
  }
});

module.exports = mongoose.model("usuarios", userSchema);
