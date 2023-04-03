const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.geoCoordinates = require("../data/geoCoordinates")[req.lookup.country];
    next();
}

module.exports = middleware;