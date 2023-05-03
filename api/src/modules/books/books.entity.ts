import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Book extends Model<Book> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    title: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    desc: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    img: string;

    @Column({
        type: DataType.DATE,
        // allowNull: false,
    })
    date: Date;

    @Column({
        type: DataType.INTEGER,
        // allowNull: false,
    })
    uid: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    mrp: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;

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
    sem: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    edition: string;

    
    

    // @ForeignKey(() => User)
    // @Column({
    //     type: DataType.INTEGER,
    //     // allowNull: false,
    // })
    // userId: number;

    // @BelongsTo(() => User)
    // user: User;
}