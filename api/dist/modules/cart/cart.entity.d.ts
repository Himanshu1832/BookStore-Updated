import { Model } from 'sequelize-typescript';
import { Book } from '../books/books.entity';
export declare class Cart extends Model<Cart> {
    userId: string;
    bookId: number;
    book: Book;
}
