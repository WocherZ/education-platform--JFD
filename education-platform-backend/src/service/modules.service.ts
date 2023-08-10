
import Modules from "../models/modules.model";


class ModulesseService {
  
  async getModules(courseId: number){
    const course = await Modules.findAll(
      {
        where:{
          courseId:courseId
        }
      }
    );
    return course;
  }


}
export default new ModulesseService();
