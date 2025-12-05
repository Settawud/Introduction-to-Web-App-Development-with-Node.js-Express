const express = require("express");
const chalk = require("chalk");
const app = express();
const port = process.env.PORT || 3000;
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");
const pricingRouter = express.Router();

app.use(morgan('combined'))
const staticPath = path.join(__dirname, '/public/');
console.log('Serving static files from:', staticPath);
app.use(express.static(staticPath));

app.set('views', './src/views');
app.set('view engine', 'ejs');

pricingRouter.route("/").get((req, res) => {
    res.render('pricings', {
        products: [
            {productTitle: 'น้ำยาล้างจาน 1', productDescription: 'น้ำยาล้างจานสูตร 1 ดีเลิศ', productPrice: '45'},
            {productTitle: 'น้ำยาล้างจาน 2', productDescription: 'น้ำยาล้างจานสูตร 2 ดีเลิศ', productPrice: '35'},
            {productTitle: 'น้ำยาล้างจาน 3', productDescription: 'น้ำยาล้างจานสูตร 3 ดีเลิศ', productPrice: '55'},
            {productTitle: 'น้ำยาล้างจาน 4', productDescription: 'น้ำยาล้างจานสูตร 4 ดีเลิศ', productPrice: '35'},
            {productTitle: 'น้ำยาล้างจาน 5', productDescription: 'น้ำยาล้างจานสูตร 5 ดีเลิศ', productPrice: '25'}
        ]
    });
});

pricingRouter.route("/:id").get((req, res) => {
    res.send("id: " + req.params.id);
});

app.use('/pricings', pricingRouter)

app.get("/", (req, res) => {
    res.render("index", { username: 'best', customers: ['Toyota', 'Nissan', 'Honda'] })
})

app.listen(port, () => {
    debug("Listening on port" + chalk.red(port));

})