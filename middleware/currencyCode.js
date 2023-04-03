const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.currencyCode = require("../data/currenciesCode")[req.lookup.country];
    next();
}

module.exports = middleware;