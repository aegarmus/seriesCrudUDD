import express from 'express'
import { createSerie } from './src/controllers/controlsSeries.js';



const app = express();
const PORT = 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.post('/series', async (req, res) => {
    //req = request = petición del cliente y res = response = respuesta del servidor
    try {

        const {id, name, gender, released, season, author} = req.body
        const seriesPost = await createSerie(id, name, gender, released, season, author)
        console.log(seriesPost)
        res.status(201).json({message: 'Serie creada con éxito', status: 201, seriesPost})

    } catch (error) {

        console.log(error)
        res.status(500).json({message: 'Lo sentimos! no pudimos crear la serie', status: 500, error})
    }
})


app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}` )
})
