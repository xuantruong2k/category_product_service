const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

let app = express();
let appRoutes = require('./api/routes.js');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

appRoutes(app);
app.use(function(req, res, next) {
    res.status(404).send(
        {url: req.originalUrl  + ' not found!'}
    );
    next();
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});