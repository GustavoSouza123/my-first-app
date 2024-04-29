const express = require('express');
const app = express();
const { readFile } = require('fs').promises;

app.get('/', async (request, response) => {
    try {
        const html = await readFile('./home.html', 'utf8');
        response.send(html);
    } catch(err) {
        response.status(500).send('there was an error processing your request');
    }
});

app.listen(process.env.PORT || 8000, () => {
    console.log(`App available on http://localhost:8000`);
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