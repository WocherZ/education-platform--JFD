import { Router } from "express"; 
import controller from "../../controller/modules.controller";
import requireJwtAuth from "../../middlewares/user.middleware";


const router: Router = Router(); 

router.get('/course/:courseId', controller.getModules);
router.post('/course/:id', requireJwtAuth, controller.post);
export default router;
