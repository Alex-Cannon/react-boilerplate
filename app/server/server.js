import express from 'express';
import path from 'path';
import generateHtml from './generateHtml';

// vars
const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static('public'));

app.get("*", generateHtml);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('App listening on port ' + PORT + "...");
  }
});

// !production? 
if (process.env.NODE_ENV !== 'production') {
  require('../../buildTools/webpackDevServer.js');
}