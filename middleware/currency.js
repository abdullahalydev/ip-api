const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.currency = require("../data/currencies")[req.lookup.country];
    next();
}

module.exports = middleware;