let calcular = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let suma = num1 + num2;
            if (suma > 5) {
                resolve(suma)
            } else {
                reject('Error al procesar los datos')
            }
            //resolve(num1 + num2);
        }, 2000)
    });
}

module.exports = {
    calcular
}