const requestsCounts = new Map();

function rateLimitMiddleware(req, res, next) {
    // Your implementation here
    const maxReqLimit = 5;
    const timeToRefresh = 500000;
    const ipAddress = req.ipAddress;

    setTimeout(() => {
        requestsCounts.delete(ipAddress);
    }, timeToRefresh);

    const count = requestsCounts.get(ipAddress) || 0
    requestsCounts.set(ipAddress, count + 1);

    if (requestsCounts.get(ipAddress) > maxReqLimit)
        return res.status(429).json({ 'Error 429': 'Too Many Requests!' });

    next();
}

module.exports = rateLimitMiddleware;