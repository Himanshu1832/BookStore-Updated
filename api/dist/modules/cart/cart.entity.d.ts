import { Model } from 'sequelize-typescript';
import { Book } from '../books/books.entity';
export declare class Cart extends Model<Cart> {
    userId: number;
    bookId: number;
    book: Book;
}
