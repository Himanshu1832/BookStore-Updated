import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';
import { Book } from '../books/books.entity';
@Table
export class Cart extends Model<Cart> {
    // @Column({
    //     type: DataType.STRING,
    //     allowNull: false,
    // })
    // ingName: string;

    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false,
    // })
    // price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    userId: number;

    @ForeignKey(() => Book)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    bookId: number;

    @BelongsTo(() => Book)
    book: Book;
}