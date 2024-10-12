import Livre from "../models/Livre.js";

export const addLivre = async (req, res) => {
  const livre = new Livre(req.body);
  await livre.save();
  res.status(201).json({ model: livre, message: "Livre ajouté avec succès" });
};

export const getLivres = async (req, res) => {
  const livres = await Livre.find();
  res.status(200).json({ model: livres, message: "sucsess" });
};

export const getLivre = async (req, res) => {
  const livre = await Livre.findOne({ _id: req.params.id });
  res.status(200).json({ model: livre, message: "success" });
};

export const updateLivre = async (req, res) => {
  const livre = await Livre.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  });
  res.status(200).json({ message: "Success" });
};

export const deleteLivre = async (req, res) => {
  await Livre.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Suppression réussite" });
};

export const livreDisponible = async (req, res) => {
  const livres = await Livre.find({ estDisponible: true });
  res.status(200).json({ model: livres, message: "success" });
};
