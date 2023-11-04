import rateLimiter from "@/utils/rate-limiter";

//The point of this file is to limit how many times a user gets to attempt to submit a campaign before they are timed out.
export const withCreateRateLimit = (handler) => {
//the user gets 40 attempts every minute to access before they have to wait.
    const limiter = rateLimiter(40, 60000);
  
    return async (req, res) => {
      return new Promise((resolve) => {
        limiter(req, res, () => {
          handler(req, res).then(resolve);
        });
      });
    };
  };
  