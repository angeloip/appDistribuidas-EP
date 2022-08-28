const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

require("./connection");

const ofertRoute = require("./routes/ofert");

app.use("/api/oferts", ofertRoute);

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
