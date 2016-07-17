'use strict';

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 8000;

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
