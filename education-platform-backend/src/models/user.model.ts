import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsToMany, HasMany } from 'sequelize-typescript';
import Course from './course.model';
import UserCourse from './userCourse.model';

export enum Role {
  STUDENT = "student",
  TEACHER = "teacher",
}

@Table({
  createdAt: false,
  updatedAt: false,
})

export default class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  email!: string;

  @Column(DataType.STRING)
  password!: string;

  @Column(DataType.ENUM(Role.STUDENT, Role.TEACHER))
  role!: Role;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  surname!: string;
  
  @BelongsToMany (() => Course, ()=> UserCourse)
  courses!: Course[];

  @HasMany(() => Course)
  authorCourses!: Course[];

}