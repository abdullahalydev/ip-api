const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.worldRegion = require("../data/worldRegion")[req.lookup.country];
    next();
}

module.exports = middleware;