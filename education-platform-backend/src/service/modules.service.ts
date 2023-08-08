import Modules from "../models/modules.model";


class ModulesseService {
  
  async getModules(id: number){
    const modules = await Modules.findAll(
      {
        where:{
          courseId:id
        }
      }
    );
    return modules;
  }


}
export default new ModulesseService();
