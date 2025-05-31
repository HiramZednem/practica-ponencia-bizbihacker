import express from 'express';
import { db } from './db/db.js';
import userRouter from './routes/user.routes.js';
import authenticateToken from './middlewares/authToken.js';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // límite de 100 peticiones por IP
  message: 'Demasiadas peticiones, intenta más tarde.'
});



const app = express();
app.use(limiter);
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