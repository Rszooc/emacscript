// Caracteristicas de ecmac6

function nuevaFuncion(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

// con ecmac6 se actualizo a 

function funcionEcmac(name='Oscar', age=33, country='MX') {
    console.log(name,age,country);
}

funcionEcmac();
funcionEcmac('Uriel',33,'MX');

// Template 
let hola = 'hola';
let world = 'Mundo';

let Frase = hola + ' ' + world;
console.log(Frase);
// Uso de plantillas 
let fraseEmac6 = `${hola} ${world}`
console.log(fraseEmac6);

// Antes de emac6
let lorem = 'Esta es una gran frase epic\n'
// emac6

let lorem = `Frases que ya
son las nuevas ya te la sabes`;
console.log(lorem);

// Desfragmentar elementos con emac6

let person = {
    'name': 'Uriel',
    'age': 33,
    'ciudad': 'Mx'
}
// Antes
// console.log(person.name);
// Emac6
let {name, age,ciudad} = person;
console.log(name,age);

// Controlador de propagación emac6
let team1 = ['brandon', 'Oscar', 'uriel'];
let team2 = ['Valeria', 'Ana', 'Maria'];

let education =['David', ...team1, ...team2];

console.log(education);

// let utilización mejor del uso de variables 
// Bloque
{
    var globalVar = 'Global Var';
}

{
    let globalLet = 'Global let'
    console.log(globalLet);
}

console.log(globalVar);

// Clase de declaración de objetos actualización ecmac6

let nombre = 'Uriel';
let edad = 32;

// Objetos declarados antes

obj = {
    nombre: nombre,
    edad: edad
}
// emac 6

objetoEcmac = {
    nombre,
    edad
}
console.log(obj);
console.log(objetoEcmac);

// Funciones flecha 
const names = [
    { firstName: 'Uriel', lastName: 'Sanjuan', age: 33},
    { firstName: 'Valeria', lastName: 'Vazquez', age: 28},
    { firstName: 'Angelica', lastName: 'Ruiz', age: 21}
]

// Antes de emac
let listOfNames = names.map( function (item) {
    console.log(item.firstName);
});

// Ahora con flecha y desintegrando función

let listOfNames2 = names.map (({firstName}) => firstName); //Obtener información

console.log(listOfNames2);

const square = num => num * num;

console.log(square(5));

// Promesas (asincronismo en parte)

// Algo va a pasar promesa en un tiempo

const funcionPromesa = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve('Todo ok');
        } else{
            reject('Todo mal');
        }
    });
}

funcionPromesa()
    .then(response => console.log(response)) //Caso a buscar
    .then(()=> console.log('Hola'))
    .catch(error => console.log(error)); // Caso equivocado

    // Clases forma mas clara de trabajar con objetos


class calculadora {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculadora();
console.log(calc.sum(2,2));

// Trabajo con modulos 
import {hola} from './modul';// Js

// nodejs
const hello = require('./modul');

console.log(hello());

// Generadores, retorna valores segun lo solicitado 
// Sintaxis especial

function* holaMundo() {
    if (true) {
        yield 'Hola';
    }
    if(true) {
        yield 'Mundo'
    }
}

const generador = holaMundo();

console.log(generador.next().value);
console.log(generador.next().value);
console.log(generador.next().value);