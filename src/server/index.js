const {resolve} = require('path');
const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config -> depending on env =====================
 * =======================================================================
 */

// set the client build path depending on env
var clientBuildPath;

if( process.env.NODE_ENV === 'development' ){

  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../../config/webpack.config.dev');

  const compiler = webpack(webpackConfig);

  app.use(webpackHotMiddleware(compiler));

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: {
        colors: true
      }
    })
  );

  clientBuildPath = resolve(__dirname, '..', '..', 'build-dev', 'client')

  // all other requests be handled by UI itself
}else{

  clientBuildPath = resolve(__dirname, '..', 'client');

  app.use('/', express.static(clientBuildPath));
}

/*
 * =======================================================================
 * ============== normal express routes go here   ========================
 * =======================================================================
 */

app.get('/banana', (request, response)=>{
  response.send("ehllo");
});

/*
 * =======================================================================
 * ==============    catchall react express route ========================
 * =======================================================================
 */

app.get('*', (req, res) => {
  res.sendFile(resolve(clientBuildPath, 'index.html'))
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(`ssssserver is now running on http://localhost:${process.env.PORT}`);
});
