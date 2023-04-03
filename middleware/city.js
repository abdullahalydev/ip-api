const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.city = geo.lookup(req.lookup.ip).city;
    next();
}

module.exports = middleware;