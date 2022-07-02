const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Importar conexion mongoDB;
require("./connection");
//Importanción del archivo de rutas y modelo
/* const productRoute = require("./routes/products"); */

//middleware
/* app.use("/api/products", productRoute); */

app.use((error, req, res, next) => {
  console.log("Error name: ", error.name);
  console.log("Error: ", error);
  console.log(error.message);
  return res.status(500).json({ message: error.message });
});

//route principal
app.get("/", (req, res) => {
  res.send("Bienvenidos al servidor backend");
});

//Configurar server básico
app.listen(PORT, () => {
  console.log(`El servidor está corriendo correctamente.`);
});
