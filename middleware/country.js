const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.country = require("../data/countries")[geo.lookup(req.lookup.ip).country];
    next();
}

module.exports = middleware;