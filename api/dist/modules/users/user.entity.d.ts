import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    name: string;
    username: string;
    email: string;
    password: string;
    college_name: string;
    course: string;
    branch: string;
    m_no: string;
    sem: string;
}
