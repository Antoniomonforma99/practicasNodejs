import fs from 'fs'

export default file => {

    console.log('Asincrono')

    fs.readFile(file, (err, contents) =>{
        if (err) {
            return console.log(err)
        }
    
        const lines = contents.toString().split('\n')
    
        for (let line of lines) {
            console.log(`Numero de caracateres por linea : ${line.length}`)
        }
    
        console.log(`Numero total de lineas : ${lines.length}`)
    })
    
    console.log(`Fichero seleccionado :  ${file}`)
}
