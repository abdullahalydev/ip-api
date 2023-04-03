const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.capitalCity = require("../data/capitalCity")[req.lookup.country];
    next();
}

module.exports = middleware;