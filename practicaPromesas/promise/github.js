import fetch from 'node-fetch';

let promesa = fetch('https://api.github.com/users/mitocode21');
promesa.then((result) => {
    return result.json();
}).then((json) => {
    console.log(json);
});