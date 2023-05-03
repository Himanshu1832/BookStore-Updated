import { Model } from 'sequelize-typescript';
export declare class Book extends Model<Book> {
    title: string;
    desc: string;
    img: string;
    date: Date;
    uid: number;
    mrp: number;
    price: number;
    college_name: string;
    course: string;
    branch: string;
    sem: string;
    edition: string;
}
