import { Router } from "express"; 
import controller from "../../controller/modules.controller";


const router: Router = Router(); 

router.get('/course/:courseId', controller.getModules);

export default router;
