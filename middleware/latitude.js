const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.longitude = geo.lookup(req.lookup.ip).ll[1];
    next();
}

module.exports = middleware;