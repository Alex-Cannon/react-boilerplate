import path from 'path';
import React from 'react';
import {renderToString, renderToStaticMarkup} from 'react-dom/server';
import Html from '../components/Html/Html.jsx';
import App from '../components/App/App.jsx';

let jsFile;

if (process.env.NODE_ENV == 'production') {

  // Use compiled, minified index.html, bundle.js, & main.css files

} else {
  // Use "hot" files from webpackDevSerer
  jsFile = 'http://localhost:8081/dev-bundle.js';
}

function generateHtml(req, res) {
  console.log(req.originalUrl);

  const innerContent = renderToString(<App pathname={req.originalUrl}/>);

  // put .js, .css, and inner content here
  const html = renderToStaticMarkup(
    <Html
      innerContent={innerContent}
      jsFile={jsFile}
    />
  );

  res.send('<!DOCTYPE html>' + html);
}

export default generateHtml;