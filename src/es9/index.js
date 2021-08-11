// ecmascript9 2019 
// operador de reposo 

const obj = {
    nombre: 'Uriel',
    edad: 33,
    ciudad: 'MX'
};
// Ejemplo 1
let {nombre, ...all} = obj;
console.log(nombre,all);

// Ejemplo dos
let {ciudad, ...all} = obj;
console.log(all);

// Utilidades de propagación, operador ... trae todos los datos del objeto anterior

const obj = {
    nombre: 'Uriel',
    edad: 33
}

const objeto2 = {
    ...obj,
    ciudad: 'MX'
}
console.log(objeto2);

// promesa final 

const holaMundo = () => {
    return new Promise((resolve,reject) => {
        (true) ? setTimeout(() => resolve('Hola mundo'), 3000) : reject(new Error('Test Error'))
    });
};

holaMundo()
    .then(response => console.log(response))
    .catch(response => console.log(response))
    .finally(() => console.log('Final del programa')) //Mensaje de finalización

// Agrupar bloques de reject 

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-04-20');
const year = match[1];
const mes = match[2];
const dia = match[3];

console.log(year, mes, dia);