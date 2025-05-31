import userService from "../services/user.service.js";

export const create = async(req, res) => {
    try {
        const {nombre, correo, contrasenia} = req.body; 
        console.log('hola soy el controller')
        console.log(req.body)
        const nuevoUsuario = await userService.create(nombre, correo, contrasenia);
        return res.json(nuevoUsuario);
    } catch {
        return res.json('ha ocurrido un error')
    }
}

export const login = async(req, res) => {
    try {
        const {correo, contrasenia} = req.body; 
        const login = await userService.login(correo, contrasenia);
        return res.json(login);
    } catch {
        return res.json('ha ocurrido un error')
    }
}

const userController = {
    create,
    login
}

export default userController;