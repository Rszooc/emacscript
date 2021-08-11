// Emacscript 8

const data = {
    frontend: 'Oscar',
    backend: 'Valeria',
    design: 'Ana'
}
// Manejo de objetos mas optimizado
const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


// Object values, devuelve un arreglo con los valores del objeto
const data = {
    frontend: 'Oscar',
    backend: 'Valeria',
    design: 'Ana'
}
const testeo = Object.values(data);
console.log(testeo);
console.log(testeo.length);

// padding ingresar caracteres adicionales, hasta el momento es solamente visual
const string = 'hello';
console.log(string.padStart(10,' '));

// terminar los objetos con , al final da la posibilidad, de que se exista un elemento adicional (tengo duda de seguridad)

const datos = {
    argumento: 'valor',
    // Puede existir mas elementos
}

//-------------------------------- async await


const holaMundo = () => {
    return new Promise((resolve, reject) => {
        (false) ? setTimeout(() => resolve('Hola mundo'),3000) : reject(new Error('Test Error'))
    });
};

// Asincronismo 
const holaSincronismo = async () => {
    const hello = await holaMundo();
    console.log(hello);
}

holaSincronismo();


// Segundo ejemplo de asincronismo 

const ejemploDos = async () => {
    try {
        const hello = await holaMundo();
        console.log(hello);
    } catch (error) {
        console.log(`El error es: ${error}`);
    }
};

ejemploDos();












