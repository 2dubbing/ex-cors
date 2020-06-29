const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));

app.listen(port, () => console.log(`front-server listening at http://localhost:${port}`));