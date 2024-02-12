const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(express.static('pages'));
app.use('/pages', express.static(path.join(__dirname, 'pages')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/html', (request, response) => {
    return response.sendFile('/pages/html/', { root: '.' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});