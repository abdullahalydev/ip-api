const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.area = geo.lookup(req.lookup.ip).area;
    next();
}

module.exports = middleware;