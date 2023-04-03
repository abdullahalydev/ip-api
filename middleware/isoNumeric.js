const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.isoNumeric = require("../data/isoNumeric")[req.lookup.country];
    next();
}

module.exports = middleware;