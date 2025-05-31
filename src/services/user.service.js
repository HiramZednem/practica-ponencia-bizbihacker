import { db } from "../db/db.js";

const create = async (nombre, correo, contrasenia) => {
    const query  = `INSERT INTO usuarios (nombre, correo, contrasenia) VALUES ('${nombre}','${correo}','${contrasenia}');`;

    const [resultado, extra] = await db.query(query);


    return { id: resultado.insertId, nombre, correo }

}

const login = async (correo, contrasenia) => {
    const query  = `SELECT * FROM usuarios WHERE correo = '${correo}' AND contrasenia = '${contrasenia}';`;

    console.log(query);
    const [resultado, extra] = await db.query(query);

    console.log(resultado);

    if (resultado) {
        return resultado;
    }
    return false;
}

const userService = {
    create,
    login
}

export default userService;