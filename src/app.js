import express from 'express';
import { db } from './db/db.js';
import userRouter from './routes/user.routes.js';
import authenticateToken from './middlewares/authToken.js';

const app = express();
app.use(express.json())

app.get('/hola', async(req, res)=> {
    res.send("hola bizbis!")

    const resultado = await db.query(`SELECT * FROM usuarios;`);
    console.log(resultado)

});

app.get('/comics', authenticateToken, (req, res) => {
    res.send( 'comics...');
})

app.use('/users', userRouter);


app.listen(3000, ()=> {
    console.log("oye carnal ya levante la aplicacion")
})