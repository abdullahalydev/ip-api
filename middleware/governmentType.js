const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.governmentType = require("../data/governmentType")[req.lookup.country];
    next();
}

module.exports = middleware;