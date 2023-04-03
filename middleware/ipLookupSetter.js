const geo = require("geoip-lite")

function middleware(req, res, next) {
    const ip = req.params.ip;
    const lookup = geo.lookup(ip);
    if (lookup) {
        req.lookup = {}
        req.lookup.ip = ip;
        next();    
    }
    else {
        res.send({ success: false, message: "invalid ip" })
    }
} 
module.exports = middleware;