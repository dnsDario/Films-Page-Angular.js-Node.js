const Film = require("../models/film.model");

async function findAll(req, res) {
  try {
    const films = await Film.find();
    return res.json(films);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de las películas" });
  }
}

async function findById(req, res) {
  try {
    const film = await Film.findById(req.params.id);
    return res.json(film);
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ msg: "error en la busqueda de la película con dicho ID" });
  }
}

async function insert(req, res) {
  try {
    const newFilm = new Film({
      title: req.body.title,
      synopsis: req.body.synopsis,
      img: req.body.img,
      director: req.body.director,
      year: req.body.year,
      category: req.body.category,
    });
    await newFilm.save();
    return res.json({msg: "película creada con éxito", newFilm})
  } catch(error) {
    console.log(error);
    return res.status(500).json({ msg: "error al guardar la pelicula" });
  }
}

async function deleteOne(req, res){
try{
    const filmDeleted = await Film.findByIdAndDelete(req.params.id)
    return res.json({msg: "pelicula elminada: ", filmDeleted })
} catch(error){
    console.log(error)
    return res.status(500).json({msg: "error al borrar la pelicula"})

}}



module.exports = {
    findAll,
    findById,
    insert,
    deleteOne,
}