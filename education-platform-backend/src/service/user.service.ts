import User from "../models/user.model";
import { RegisterRequest, LoginRequest  } from "../dtos/auth.dto";
import { UserChangeRequest } from "../dtos/user.dto";
import bcrypt from 'bcrypt';
// import { use } from "passport";

async function getHashPassword(password?: string) {
  return await bcrypt.hash(password || "", 10);
}


class UserService {
  async createUser(userDTO: RegisterRequest){
    const emailExists = await User.findOne({where: {email: userDTO.email}});
    if (emailExists) {
      return undefined;
    }
    const hashPassword = await getHashPassword(userDTO.password);
    const user = await User.create(
      {email: userDTO.email,
      password : hashPassword,
      name: userDTO.name,
      surname: userDTO.surname,
      role : userDTO.role}
    );
    return user;
  }

  async getUser(loginDTO: LoginRequest){
    const user = await User.findOne({where: {email: loginDTO.email}});
    if (user && await bcrypt.compare(loginDTO.password || "", user.password)){
      return user;
    }
    return null;
  }
  
  async getById(id: number){
    const user = await User.findByPk(id, {attributes: { exclude: ['password', 'createdAt', 'updatedAt']} });
    return user;
  }
  
  async getAll(){
    const result = await User.findAll({attributes: { exclude: ['password', 'createdAt', 'updatedAt']} });
    return result;
  }

  async changeById(userId: number, changeDTO: UserChangeRequest){
    const user = await User.findByPk(userId);
    if (user) {
      if (changeDTO.password && changeDTO.password.length > 6) {
        const hashPassword = await getHashPassword(changeDTO.password);
        user.password = hashPassword;
      }
      if (changeDTO.name) {
        user.name = changeDTO.name;
      }
      if (changeDTO.surname) {
        user.surname = changeDTO.surname;
      }
      await user.save();
      const { name, surname } = user;
      return {userId, name, surname};
    }
   return user;
  }
}
export default new UserService();