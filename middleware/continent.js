const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.continents = require("../data/continents")[req.lookup.country];
    next();
}

module.exports = middleware;