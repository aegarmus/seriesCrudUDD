import express from 'express'
import { getAllSeries, getSerieById, createSerie, deleteSerie, updateSerie } from './src/controllers/controlsSeries.js';



const app = express();
const PORT = 3000;

//Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/series', async (req, res) => {
    try {
      const series = await getAllSeries();
      res.status(200).json({ message: 'Series leídas con éxito', series });
    } catch (error) {
      res.status(404).json({ message: 'Series no encontradas', error});
    }
  });
  
  app.get('/series/id/:id', async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const serie = await getSerieById(id);
      console.log(serie);
      res.status(200).json({ message: `Serie ${id} encontrada`, serie });
  
    } catch (error) {
      res.status(404).json({ message: 'Serie no encontrada', error});
    }
  });

app.post('/series', async (req, res) => {
    //req = request = petición del cliente y res = response = respuesta del servidor
    try {
        const {id, name, gender, released, season, author} = req.body
        const seriesPost = await createSerie(id, name, gender, released, season, author)
        console.log(seriesPost)
        res.status(201).json({message: 'Serie creada con éxito', status: 201, seriesPost})
    } catch (error) {
        res.status(500).json({message: 'Lo sentimos! no pudimos crear la serie', status: 500, error})
    }
})

app.put('/series/:id', async (req, res) => {
    try {
        const id  = parseInt(req.params.id)
        const {name, gender, released, season, author} = req.body
        const serie = await updateSerie(id, name, gender, released, season, author)
        res.status(203).json({message: 'Serie creada con éxito', status: 203, serie})
    } catch (error) {
        res.status(500).json({message: 'Lo sentimos! no pudimos actualizar la serie', status: 500, error})
    }
});

app.delete('/series/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id)
        const series = await deleteSerie(id)
        res.status(202).json({message: 'Serie eliminada con éxito', status: 202, series})
    } catch (error) {
        res.status(500).json({message: 'Lo sentimos! no pudimos actualizar la serie', status: 500, error})
    }
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}` )
})
