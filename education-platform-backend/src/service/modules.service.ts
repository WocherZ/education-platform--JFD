
import Course from "../models/course.model";
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
  
  async create(courseId: number, name: string){
    // console.log("courseId", courseId);
    
    const courseExists = await Course.findByPk(courseId);
    // console.log("courseExists", courseExists);
    if (!courseExists) {
      return undefined;
    }
    const module = await Modules.create(
      {name: name,
      courseId: courseId
      }
    );
    return module;
  }

}
export default new ModulesseService();
