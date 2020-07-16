require('dotenv').config();
const express = require("express");
const bodyParser = require('body-parser');
const viewEngine = require('./config/viewEngine');
const initWebRouters = require('./routers/web');
const app = express();
let port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

viewEngine(app);
initWebRouters(app);

app.listen(port, () => console.log(`server is running on port ${port}`));


