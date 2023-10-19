import rateLimiter from "@/utils/rate-limiter";

export const withCreateRateLimit = (handler) => {
//the user gets 5 attempts every minute to submit a sheet before they have to wait.
    const limiter = rateLimiter(5, 60000);
  
    return async (req, res) => {
      return new Promise((resolve) => {
        limiter(req, res, () => {
          handler(req, res).then(resolve);
        });
      });
    };
  };
  