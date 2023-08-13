import { Router } from "express"; 
import controller from "../../controller/course.controller";
import requireJwtAuth from "../../middlewares/user.middleware";
import { makePostRequestLimiter } from "../../middlewares/ratelimit.middleware";

const router: Router = Router(); 

router.get('/search?:name', controller.getByName);
router.get('/:id',  controller.getById);
router.get('/',  controller.getAll);
router.post('/', requireJwtAuth, makePostRequestLimiter,  controller.post);
router.put('/:id', requireJwtAuth, controller.changeById);
router.post('/join', requireJwtAuth,  controller.join);

export default router;
