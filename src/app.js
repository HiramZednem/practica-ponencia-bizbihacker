import express from 'express';
import { db } from './db/db.js';
import userRouter from './routes/user.routes.js';

const app = express();
app.use(express.json())

app.get('/hola', async(req, res)=> {
    res.send("hola bizbis!")

    const resultado = await db.query(`SELECT * FROM usuarios;`);
    console.log(resultado)

})

app.use('/users', userRouter);


app.listen(3000, ()=> {
    console.log("oye carnal ya levante la aplicacion")
})