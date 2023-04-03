function middleware(req, res, next) {
    const ip = "154.237.25.39";
    req.lookup = {}
    req.lookup.ip = ip;
    next();
}
module.exports = middleware;