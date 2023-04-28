import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
// import { User } from '../users/user.entity';

@Table
export class Ingredients extends Model<Ingredients> {
  

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ingName: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    price: number;

    // @ForeignKey(() => User)
    // @Column({
    //     type: DataType.INTEGER,
    //     allowNull: false,
    // })
    // userId: number;

    // @BelongsTo(() => User)
    // user: User;
}