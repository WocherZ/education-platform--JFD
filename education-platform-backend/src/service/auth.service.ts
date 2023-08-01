import { RegisterRequest, LoginRequest } from "../dtos/auth.dto";
import userService from "./user.service";

class AuthService {
  async register(userDTO: RegisterRequest) {
     const user = await userService.createUser(userDTO);
     return user;
  }
  async login(userDTO: LoginRequest) {
    const user = await userService.getUser(userDTO);
    return user;
 }

}

export default new AuthService();