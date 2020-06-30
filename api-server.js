const express = require('express');
const app = express();
const port = 3001;

// app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(req.method);

  res.setHeader("Access-Control-Allow-Headers", "Content-type");
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");

  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
  } else {
    next();
  }
});

// route
app.get('/images', (req, res) => {
  console.log('/images');
  res.json({ images: ['/images/kakao_muzi-con.png'] });
});

app.get('/simple-text', (req, res) => {
  console.log('/simple-text');
  res.send('simple text~~');
});

app.listen(port, () => console.log(`api-server listening at http://localhost:${port}`));