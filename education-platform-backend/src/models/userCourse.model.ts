import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import User from './user.model';
import Course from './course.model';

enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
}


@Table({
  createdAt: false,
  updatedAt: false,
})
export default class UserCourse extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(()=> User)
  @Column
  userId!: number;

  @ForeignKey(()=> Course)
  @Column
  courseId!: number;

  @Column(DataType.ENUM(Role.STUDENT, Role.TEACHER))
  role!: Role;
}