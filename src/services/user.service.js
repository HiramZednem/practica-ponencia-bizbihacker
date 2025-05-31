import { db } from "../db/db.js";
import bcrypt, { compare } from 'bcrypt';

const create = async (nombre, correo, contrasenia) => {
    contrasenia = await bcrypt.hash(contrasenia, 10);
    const query  = `INSERT INTO usuarios (nombre, correo, contrasenia) VALUES ('${nombre}','${correo}','${contrasenia}');`;

    const [resultado, extra] = await db.query(query);


    return { id: resultado.insertId, nombre, correo }

}

const getUserById = async (id) => {
    const query  = `SELECT * FROM usuarios WHERE id = '${id}';`;

    const [resultado, extra] = await db.query(query);

    console.log(resultado)
    return resultado;

}

const login = async (correo, contrasenia) => {
    const query  = `SELECT * FROM usuarios WHERE correo = '${correo}';`;
    console.log(query)
    const [resultado, extra] = await db.query(query);
    console.log(resultado)
    if(resultado) {
        const match = await bcrypt.compare(contrasenia, resultado[0].contrasenia);
        if(match) { return resultado}
    }
    return 'login fallido';
}

const userService = {
    create,
    login,
    getUserById
}

export default userService;