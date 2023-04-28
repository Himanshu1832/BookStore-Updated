import { Model } from 'sequelize-typescript';
import { User } from '../users/user.entity';
export declare class Cart extends Model<Cart> {
    ingName: string;
    price: number;
    cartcode: string;
    userId: number;
    user: User;
}
