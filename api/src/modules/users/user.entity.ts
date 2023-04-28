import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;
  

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })  
  college_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  course: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  branch: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  m_no: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sem: string;
  

  
}
