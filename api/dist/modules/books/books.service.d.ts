import { Book } from './books.entity';
import { BookDto } from './dto/book.dto';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: typeof Book);
    create(Book: BookDto): Promise<Book>;
    findAll(): Promise<Book[]>;
    findOne(id: any): Promise<Book>;
    delete(id: any): Promise<number>;
    update(id: any, data: any, uid: any): Promise<{
        numberOfAffectedRows: number;
        updatedBook: Book;
    }>;
}
