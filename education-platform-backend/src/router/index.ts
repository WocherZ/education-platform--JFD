import { Router } from "express";
import authRouter from "./routes/auth";
import userRouter from "./routes/user";
import courseRouter from "./routes/course";
import courseModules from "./routes/modules";
// import userCourseRouter from "./routes/usercourse";

const router = Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/course", courseRouter);
router.use("/modules", courseModules);

export default router;