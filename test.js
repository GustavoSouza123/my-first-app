/* promise-based (async, non-blocking, cleaner code) */

// ES Module
// import { promises } from 'fs';
// const { readFile } = promises;

// CommonJS Module
const { readFile } = require('fs').promises;

async function hello() { /* function not necessary with node > 14.3 */
    const file = await readFile('./hello.txt', 'utf8');
    console.log(file)
}

hello();

console.log('hello world');

/* my own module */

// ES Module
// import myModule from './my-module.js';

// CommonJS Module
const myModule = require('./my-module.js');
console.log(myModule);



/* non-blocking */
// readFile('./hello.txt', 'utf8', (err, txt) => {
//     console.log(txt);
// });

/* blocking */
// const txt = readFileSync('./hello.txt', 'utf8');
// console.log(txt)


// process.on('exit', () => {
//     console.log('exiting...')
// })