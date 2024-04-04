const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

async function searchUsers(req, res){
  try{
    usuarios = await User.find({})
    res.json(usuarios)
  } catch (error){
    res.status(500).json({ msg: "error interno del servidor para buscar users" });
  }
};

async function signup(req, res) {
  try{
    const hash = await bcrypt.hash(req.body.password, 12);
    const newUser = new User({
      email: req.body.email,
      password: hash,
      role: "user",
      name: req.body.name,
    });
    await newUser.save();
    return res.json({ msg: "registro correcto" });
  } catch(error){
    res.status(500).json({msg: 'error al registrase'})
  }
}


async function login(req, res) {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      return res.status(400).json({ msg: "credenciales no validas" });
    } else {
      const resultCompare = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );
      if (!resultCompare) {
        //la contraseña es incorrecta
        return res.status(400).json({ msg: "credenciales no validas" });
      } else {
        const token = jwt.sign({ userId: foundUser._id }, process.env.JWTSECRET, {
          expiresIn: "3h",
        });
        return res
          .status(200)
          .json({ msg: "logeado correctamente", token: token, role: foundUser.role});
      }
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "error al logear" });
  }
}

async function cambiarUsuario(id, usuario) {
  try {
    modificacionUsuario = {
      email: usuario.email,
      password: await bcrypt.hash(usuario.password, 12),
      role: usuario.role,
      name: usuario.name,
    };
    const usuarioModificado = await User.findByIdAndUpdate(
      id,
      modificacionUsuario
    );
    return usuarioModificado;
  } catch {
    res.status(500).json({ msg: "error interno al registrarse" });
  }
}

async function modifyPwd(id, nuevaPassword) {
  try {
    const newPwdCrypt = await bcrypt.hash(nuevaPassword, 12);
    const objNewPwdCrypt = {
      password: newPwdCrypt,
    };
    const userToModifyPwd = await User.findByIdAndUpdate(id, objNewPwdCrypt);
    return userToModifyPwd;
  } catch (error) {
    res.status(500).json({ msg: "error interno del servidor" });
  }
}

async function borrarUsuario(req, res){
  try{
    const userDeleted = await User.findByIdAndDelete(req.params.id)
    return res.status(200).json({msg: "usuario borrado correctamente", userDeleted})
  } catch(error){
    res.status(500).json({ msg: "error interno del servidor" });
      console.error(error);    
  }
  
}


module.exports = {
  searchUsers,
  signup,
  login,
  cambiarUsuario,
  modifyPwd,
  borrarUsuario
};
