import Course from "../models/course.model";
import UserCourse, { Role } from "../models/userCourse.model";
import User from "../models/user.model";
import { CourseChangeRequest } from "../dtos/course.dto";

class CourseService {
  async create(name: string, authorId: number, description: string){
    const courseExists = await Course.findOne({where: {name: name}});
    if (courseExists) {
      return undefined;
    }
    const course = await Course.create(
      {name: name,
      userId: authorId,
      description: description
      }
    );
    await UserCourse.create(
      {userId: authorId,
      courseId: course.id,
      role: Role.TEACHER}
    );
    return course;
  }

  async join(courseId: string, userId: number, role: Role){
    const course = await Course.findByPk(courseId);
    const user = await User.findByPk(userId);
    if (course && user) {
      await UserCourse.create(
        {userId: userId,
        courseId: course.id,
        role: role}
      );
      return course;
    } else {
      return undefined;
    }
  }
    
  async getAll(){
    const result = await Course.findAll();
    return result;
  }

  async getById(id: number){
    const course = await Course.findByPk(id);
    return course;
  }
  
  async getByName(name: string){
    const courses = await Course.findOne({where: {name: name}});
    return courses;
  }

  async changeById(id: number, changeDTO: CourseChangeRequest){
    const course = await Course.findByPk(id);
    if (course) {
      if (changeDTO.name) {
        course.name = changeDTO.name;
      }
      if (changeDTO.description) {
        course.description = changeDTO.description.slice(0, 255);  // исключить переполнение
      }
      await course.save();
      const { name } = course;
      return {id, name};
    }
   return course;
  }

}
export default new CourseService();
