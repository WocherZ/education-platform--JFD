import { Router } from "express"; 
import controller from "../../controller/course.controller";
import requireJwtAuth from "../../middlewares/user.middleware";


const router: Router = Router(); 

router.get('/modules?:name', requireJwtAuth, controller.getByName);


export default router;
