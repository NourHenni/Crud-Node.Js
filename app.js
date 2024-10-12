import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import livreRoutes from "./routes/LivreRoute.js";
const app = express();

mongoose
  .connect("mongodb://localhost:27017/DB_Isamm")
  .then(function () {
    console.log("Connexion réussite");
  })
  .catch(function (e) {
    console.log("Connexion impossible");
  });

app.use(cors());
app.use(express.json());

app.use("/v1/api", livreRoutes);

export default app;
