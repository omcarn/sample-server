const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
  const mySecret = process.env.MY_SECRET || 'No secret set';
  res.json({ message: 'Hello from Express!', secret: mySecret });
});

app.use('/api', router);

module.exports.handler = serverless(app);
