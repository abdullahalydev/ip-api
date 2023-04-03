const geo = require("geoip-lite")

function middleware(req, res, next) {
    req.lookup.barcodePerfix = require("../data/barCodePerfix")[req.lookup.country];
    next();
}

module.exports = middleware;