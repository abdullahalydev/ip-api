function middleware(req, res, next) {
    const ip = req.ip;
    req.lookup = {}
    req.lookup.ip = ip;
    next();
}
module.exports = middleware;
