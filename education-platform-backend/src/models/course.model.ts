import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement,  BelongsToMany, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import User from './user.model';
import Modules from './modules.model';
import UserCourse from './userCourse.model';

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class Course extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  picture!: string;

  @Column(DataType.STRING)
  description!: string;

  @ForeignKey(()=>User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(()=>User)
  user!: User;

  @HasMany(()=>Modules)
  modules!: Modules[];

  @BelongsToMany(() => User, ()=> UserCourse)
  users!: User[];
 
}