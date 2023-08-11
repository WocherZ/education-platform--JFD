import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, BelongsToMany, HasMany } from 'sequelize-typescript';
import Course from './course.model';
import UserCourse from './userCourse.model';

export enum Role {
  ADMIN = "administrator",
  USER = "user",
}

export enum Gender {
  MAN = "man",
  WOMAN = "woman",
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

  
  @Column({type: DataType.ENUM(Role.ADMIN, Role.USER),
    defaultValue: Role.USER})
  role!: Role;

  @Column(DataType.ENUM(Gender.MAN, Gender.WOMAN))
  gender!: Gender;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.STRING)
  surname!: string;
  
  @Column(DataType.INTEGER)
  age!: number;

  @Column(DataType.STRING)
  phone!: string;

  @Column(DataType.STRING)
  organization!: string;

  @Column(DataType.STRING)
  department!: string;

  @Column(DataType.STRING)
  aboutMe!: string;

  @BelongsToMany (() => Course, ()=> UserCourse)
  courses!: Course[];

  @HasMany(() => Course)
  authorCourses!: Course[];

}