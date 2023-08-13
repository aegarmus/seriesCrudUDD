import { Series } from '../models/Series.js'
import { readSeries, writeSeries } from '../utils/fsFunction.js'

export const getAllSeries = async () => {
    const series = await readSeries();
    return series;
  }
  
export const getSerieById = async (id) => {
    const data = await readSeries();
    // find devuelve sólo la primera coincidencia que encuentra
    const series = data.find( serie => {
      if(serie.id === id) {
        return serie;
      }
    } );
    return series;
}

export const createSerie = async(id, name, gender, released, season, author) => {

    const serie = new Series(id, name, gender, released, season, author);
    const series = await readSeries()
    console.log(series)
    series.push(serie)
    await writeSeries(series)
    return series
} 

export const updateSerie = async (id, name, gender, released, season, author) => {
    const serie = new Series(id, name, gender, released, season, author)
    const series = await readSeries()
    const serieIndex = series.findIndex(index => index.id === id)
    series[serieIndex] = serie

    await writeSeries(series)
    return series
}

export const deleteSerie = async(id) => {
    const series = await readSeries();
    const filterSeries = series.filter(serie => serie.id != id)
    await writeSeries(filterSeries)
    return filterSeries
}
