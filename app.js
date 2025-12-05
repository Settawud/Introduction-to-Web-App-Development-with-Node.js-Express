const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));
const staticPath = path.join(__dirname, '/public/');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

// View Engine Setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');
// Explicitly register EJS to ensure bundler detects it
app.engine('ejs', require('ejs').__express);

const pricingRouter = require('./src/router/pricingsRouter');
app.use('/pricings', pricingRouter);

app.get("/", (req, res) => {
    res.render("index");
});

if (require.main === module) {
    app.listen(port, () => {
        debug("Listening on port " + chalk.red(port));
    });
}

module.exports = app;