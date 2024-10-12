import mongoose from "mongoose";

const LivreSchema = mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  auteur: {
    type: String,
    required: true,
  },
  datePublication: {
    type: Date,
    required: true,
  },
  nbrPage: {
    type: Number,
    required: true,
  },
  estDisponible: {
    type: Boolean,
    required: true,
    default: true,
  },
});

export default mongoose.model("Livre", LivreSchema);
