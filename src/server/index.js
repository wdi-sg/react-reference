const {resolve} = require('path');
const http = require('http');
const express = require('express');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

app.set('env', process.env.NODE_ENV);

// Set up middleware
app.use(methodOverride('_method'));
app.use(cookieParser());

app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

if( process.env.NODE_ENV === 'development' ){

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../config/webpack.config.dev');

  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  app.use(webpackHotMiddleware(compiler));
  const clientBuildPath = resolve(__dirname, '..', '..', 'build-dev', 'client')

  // all other requests be handled by UI itself
}else{

  app.use('/', express.static(clientBuildPath));

  const clientBuildPath = resolve(__dirname, '..', 'client');
}

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

app.get('/banana', (request, response)=>{
  response.send("ehllo");
});

app.get('*', (req, res) => {
  res.sendFile(resolve(clientBuildPath, 'index.html'))
});

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */


http.createServer(app).listen(process.env.PORT, () => {
  console.log(`HTTP server is now running on http://localhost:${process.env.PORT}`);
});
