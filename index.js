const express = require('express');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

process.env.PORT = process.env.PORT || 3000;

const app = express();

/*
 * =======================================================================
 * ================ REACT config                     =====================
 * =======================================================================
 */

// set the client build path depending on env
var clientBuildPath = resolve(__dirname, 'public');

app.use('/', express.static(clientBuildPath));

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
 * ==============   react express route           ========================
 * =======================================================================
 */

app.get('/react', (req, res) => {
  const myHtml = `
    <html>
      <body>
        <h1>Wow, react</h1>
        <script type="text/javascript" src="/main.js"></script>
      </body>
    </html>
  `;
  res.send( myHtml );
});

/*
 * =======================================================================
 * ============                     LISTEN                   =============
 * =======================================================================
 */

app.listen(process.env.PORT, () => {
  console.log(`ssssserver is now running on http://localhost:${process.env.PORT}`);
});
