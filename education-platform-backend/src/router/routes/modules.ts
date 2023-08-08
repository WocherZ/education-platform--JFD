import { Router } from "express"; 
import controller from "../../controller/modules.controller";


const router: Router = Router(); 

router.get('/:id', controller.getModules);

export default router;
