import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Order extends Model<Order> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ingName: string;

    
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    code: string;
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