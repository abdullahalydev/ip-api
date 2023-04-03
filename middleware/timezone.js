const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.timezone = geo.lookup(req.lookup.ip).timezone;
    next();
}

module.exports = middleware;