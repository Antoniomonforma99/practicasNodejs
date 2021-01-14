let prom = require("./promesa");

prom.calcular(6,1).then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error)
});

/*
let promesa = new Promise((resolve, reject) =>{
    resolve('Éxito al procesar los datos');
    //reject('Error al procesarse')
});

promesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});
*/