const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.eu = geo.lookup(req.lookup.ip).eu;
    next();
}

module.exports = middleware;