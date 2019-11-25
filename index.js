const {resolve} = require('path');
const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const db = require('./db');

const app = express();

// Set up middleware
app.use(express.json());

app.use(express.urlencoded({
  extended: true
}));

// Set react-views to be the default view engine
const reactEngine = require('express-react-views').createEngine();
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', reactEngine);

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

const setupAppRoutes =
  process.env.NODE_ENV === 'development' ? require('./middlewares/development') : require('./middlewares/production');

require('./routes')(app, db);

// application routes (this goes last)
setupAppRoutes(app);

/*
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(`HTTP server is now running on http://localhost:${process.env.PORT}`);
});
