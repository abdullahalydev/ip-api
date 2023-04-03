const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.continentsCode = require("../data/continentsCode")[req.lookup.country];
    next();
}

module.exports = middleware;