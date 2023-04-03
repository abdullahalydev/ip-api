const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.countryCode = geo.lookup(req.lookup.ip).country;
    next();
}

module.exports = middleware;