import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement,  ForeignKey} from 'sequelize-typescript';
import Course from './course.model';

@Table({
  createdAt: false,
  updatedAt: false,
})
export default class Modules extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.STRING)
  name!: string;

  @ForeignKey(()=>Course)
  @Column(DataType.INTEGER)
  courseId!: number;
 
}