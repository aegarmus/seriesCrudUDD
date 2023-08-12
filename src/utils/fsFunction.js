import * as fs from 'fs'

export const readSeries = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('./series.json', 'utf-8', (error, data) => {
            if( error ){
                reject('No pudimos leer el archivo')
                return
            }
            resolve(JSON.parse(data))
        })
    })
}

export const writeSeries = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./series.json', JSON.stringify(data), 'utf8', (error) => {
            if(error){
                reject('Error al sobreescribir el archivo')
            }
            resolve('Felicidades, el archivo se cargo con éxito')
        })
    })
}

