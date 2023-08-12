import { Series } from '../models/Series.js'
import { readSeries, writeSeries } from '../utils/fsFunction.js'





export const createSerie = async(id, name, gender, released, season, author) => {

    const serie = new Series(id, name, gender, released, season, author);
    const series = await readSeries()
    console.log(series)
    series.push(serie)
    await writeSeries(series)
    return series
} 