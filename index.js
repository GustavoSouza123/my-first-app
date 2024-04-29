const express = require('express');
const app = express();
const { readFile } = require('fs').promises;
const ip = require('ip');

app.get('/', async (request, response) => {
    try {
        const html = await readFile('./home.html', 'utf8');
        response.send(html);
    } catch(err) {
        response.status(500).send('there was an error processing your request');
    }
});

app.listen(process.env.PORT || 8000, ip.address(), () => {
    console.log(`App available on http://${ip.address()}:8000`);
});


/* without promises */

// app.get('/', (request, response) => {
//     readFile('./home.html', 'utf8', (err, html) => {
//         if(err) {
//             response.status(500).send('there was an error processing your request');
//         }
//         response.send(html);
//     });
// });