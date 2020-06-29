const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.static('views'));

// route
app.get('/', (req, res) => res.render('index.html'));
app.get('/images', (req, res) => res.json({ images: ['/images/kakao_tube.png'] }));

app.listen(port, () => console.log(`front-server listening at http://localhost:${port}`));