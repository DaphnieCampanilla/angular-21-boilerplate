const express = require('express');
const path = require('path');
const app = express();

// Serve the static files from the Angular dist directory
app.use(express.static(__dirname + '/dist/angular-15-example'));

// Send all other requests to the Angular index.html so routing works
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-15-example/index.html'));
});

// Start the app by listening on the default Heroku/Render port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Node Express server listening on port ${PORT}`);
});
