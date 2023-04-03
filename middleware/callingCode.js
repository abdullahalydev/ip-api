const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.callingCode = require("../data/callingCode")[req.lookup.country];
    next();
}

module.exports = middleware;