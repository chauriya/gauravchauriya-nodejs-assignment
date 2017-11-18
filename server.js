const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routerObject = express.Router();

const apiRoute = require('./src/routes/api-routes')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/", apiRoute(routerObject));

app.listen(3000, () => console.log('App listening on port 3000!'));

module.exports = app;