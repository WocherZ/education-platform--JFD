import rateLimit from 'express-rate-limit';
import { IUser } from "./user.middleware";
import { Request } from 'express';
import RedisStore from "rate-limit-redis";
import { createClient } from "redis";

// Create a `node-redis` client
const client = createClient({ url: `redis://${process.env.REDIS_HOST}`});
// Then connect to the Redis server
(async () => {
  await client.connect();
})().catch(e => {
  console.log(e);
  throw Error(e);
});

export const registerAccountLimiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
		'Error. Too many accounts created from this IP, please try again after an minute',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (request) => request.ip,
  // Redis store configuration
  store: new RedisStore({
    prefix: "jfd_ip:",
    sendCommand: async (...args: string[]) => client.sendCommand(args)
  }),
});

export const makePostRequestLimiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message:
		'Error. Too many POST request created, please try again after an minute',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  keyGenerator: (req: Request) => {
    const user = req.user as IUser;
    return user.userId.toString(); } ,
  store: new RedisStore({
      prefix: "jfd_userId:",
      sendCommand: async (...args: string[]) => client.sendCommand(args)
    }),
});

