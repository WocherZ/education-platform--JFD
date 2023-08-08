import Course from "../models/course.model";


class ModulesseService {
  
  async getByName(name: string){
    const modules = await Course.findAll({where: {name: name}});
    return modules;
  }


}
export default new ModulesseService();
