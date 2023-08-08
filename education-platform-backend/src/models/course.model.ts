import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement,  BelongsToMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './user.model';
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

  @ForeignKey(()=>User)
  @Column(DataType.INTEGER)
  userId!: number;

  @BelongsTo(()=>User)
  user!: User;

  @BelongsToMany(() => User, ()=> UserCourse)
  users!: User[];
 
}