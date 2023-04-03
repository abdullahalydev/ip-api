const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.range = geo.lookup(req.lookup.ip).range;
    next();
}

module.exports = middleware;