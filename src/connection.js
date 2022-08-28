const mongoose = require("mongoose");

const dbConnect = async () => {
  await mongoose
    .connect(
      "mongodb+srv://exparcial:BVMb6RNuDhNgEIhX@cluster0.q7jcl.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Conexión correcta a MongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};
dbConnect();

//wYxOqylJPCO40qb7
