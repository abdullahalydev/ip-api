const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.religion = require("../data/religion")[req.lookup.country];
    next();
}

module.exports = middleware;