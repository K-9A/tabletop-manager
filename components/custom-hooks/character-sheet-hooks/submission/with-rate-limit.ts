import rateLimiter from "@/utils/rate-limiter";

export const withCreateRateLimit = (handler) => {
   // Limit to 55 requests per minute, in the context of the create sheet route, the user gets 5 attempts
   // every minute to submit a sheet before they have to wait.
    const limiter = rateLimiter(55, 60000);
  
    return async (req, res) => {
      return new Promise((resolve) => {
        limiter(req, res, () => {
          handler(req, res).then(resolve);
        });
      });
    };
  };
  