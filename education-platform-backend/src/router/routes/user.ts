import { Router } from "express"; 
import controller from "../../controller/user.controller";
import requireJwtAuth from "../../middlewares/user.middleware";
// import { makePostRequestLimiter } from "../../middlewares/ratelimit.middleware";

const router: Router = Router(); 

router.get('/:id', requireJwtAuth, controller.getById);
router.get('/', requireJwtAuth, controller.getAll);
router.put('/:id', requireJwtAuth, controller.changeById);

export default router;
