const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.domain = require("../data/domainTld")[req.lookup.country];
    next();
}

module.exports = middleware;