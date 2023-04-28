import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Cart extends Model<Cart> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ingName: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    cartcode: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @BelongsTo(() => User)
    user: User;
}