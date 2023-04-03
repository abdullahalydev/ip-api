const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.cityCode = geo.lookup(req.lookup.ip).region;
    next();
}

module.exports = middleware;