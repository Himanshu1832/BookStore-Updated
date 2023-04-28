import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
export declare class Order extends Model<Order> {
    ingName: string;
    price: string;
    code: string;
    cartcode: string;
    userId: number;
    user: User;
}
