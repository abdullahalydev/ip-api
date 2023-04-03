const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.languages = require("../data/languages")[req.lookup.country];
    next();
}

module.exports = middleware;