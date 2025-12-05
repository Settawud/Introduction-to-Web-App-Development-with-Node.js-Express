const express = require("express");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

app.use(morgan('combined'))
const staticPath = path.join(__dirname, '/public/');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("Hello Settawud!");
})

app.listen(port, () => {
    debug("Listening on port" + chalk.red(port));

})