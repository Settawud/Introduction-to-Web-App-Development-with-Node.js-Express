const express = require('express')
const pricingsRouter = express.Router();
const pricings = require('../../data/pricings.json');

pricingsRouter.route('/').get((req, res) => {
    res.render("pricings", {
        pricings,
    });
});

pricingsRouter.route('/checkout').get((req, res) => {
    const planId = req.query.plan;
    const selectedPlan = pricings.find(p => p.id === planId);

    console.log("Checkout requested for plan:", planId);
    console.log("Found plan:", selectedPlan);

    if (selectedPlan) {
        res.render("checkout", {
            plan: selectedPlan
        });
    } else {
        console.log("Plan not found, redirecting to pricings");
        res.redirect('/pricings');
    }
});

module.exports = pricingsRouter