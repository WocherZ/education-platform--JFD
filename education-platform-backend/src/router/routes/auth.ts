import { Router } from "express";
import authController from "../../controller/auth.controller";
import { registerAccountLimiter } from "../../middlewares/ratelimit.middleware";

const router = Router();

router.post("/register", registerAccountLimiter, authController.register );
router.post("/login", authController.login);


export default router;