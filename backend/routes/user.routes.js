const express = require("express");
const router = express.Router();
require("dotenv").config();
const {
  login,
  signup,
  searchUsers,
  cambiarUsuario,
  modifyPwd,
  borrarUsuario,
} = require("../controllers/user.controller");

const { isAdmin, isAuthenticated } = require("../middleware/auth.middleware");
const {pwdIguales, middleWareVerifYCambioContrasena} = require ("../middleware/usuario.middleware")

router.get("/", isAdmin ,searchUsers);

router.post("/signup",pwdIguales, signup);

router.post("/login", login);

/* 
* Para modificar un usuario, tendremos que poner en la ruta el "id" del usuario a modificar y añadir la query "?token=..(token de admin).."
* Solo de esta forma, estando loggeado como admin y con el id del usuario a modificar, se podrá modificar y poner otro usuario con role admin.
 */
router.put("/:id", isAdmin, async (req, res) => {
  try {
    await cambiarUsuario(req.params.id, req.body);
    return res
      .status(400)
      .json({ msg: "el usurio ha sido modificado con exito" });
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
});

/* 
* El usuario necesitará estar loggeado (dentro de su cuenta), para modificar su contraseña
 */
router.patch(
  "/:id",
  isAuthenticated,
  middleWareVerifYCambioContrasena,
  async (req, res) => {
    try {
      await modifyPwd(req.params.id, req.body.nuevaPassword);
      res
        .status(400)
        .json({ msg: "la contraseña ha sido modificada con éxito" });
    } catch (error) {
      res.status(500).json({ msg: "error interno del servidor" });
      console.error(error);
    }
  }
);

router.delete("/:id", isAdmin, async (req, res) => {
  try{
    usuarioBorrado = await borrarUsuario(req.params.id)
    res.status(400).json({msg: "usuario borrado correctamente"})
  } catch(error){
    res.status(500).json({ msg: "error interno del servidor" });
      console.error(error);
  }
  
  
})

module.exports = router;
