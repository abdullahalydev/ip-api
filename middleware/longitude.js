const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.latitude = geo.lookup(req.lookup.ip).ll[0];
    next();
}

module.exports = middleware;