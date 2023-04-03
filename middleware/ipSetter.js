function middleware(req, res, next) {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    req.lookup = {}
    req.lookup.ip = ip;
    next();
}
module.exports = middleware;
