import passport from 'passport';
import { Role } from '../models/user.model';

export interface IUser {
  userId: number
  role: Role
}

const requireJwtAuth = passport.authenticate('jwt', { session: false });

export default requireJwtAuth;