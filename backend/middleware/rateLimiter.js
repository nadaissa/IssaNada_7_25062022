const rateLimiter = require('express-rate-limit');


const limiter = rateLimiter({
    windowMs: 6 * 1000, // 6 seconds
	max: 2, // Limit each IP to 2 requests per `window` (here, per 6 seconds)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: 'Sorry too much login attempts! please try again later!'
  });




module.exports = limiter;

