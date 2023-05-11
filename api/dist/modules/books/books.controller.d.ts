/// <reference types="multer" />
import { BooksService } from './books.service';
import { Book as BookEntity } from './books.entity';
import { BookDto } from './dto/book.dto';
export declare class BooksController {
    private readonly BookService;
    constructor(BookService: BooksService);
    findAll(): Promise<BookEntity[]>;
    findOne(id: number): Promise<BookEntity>;
    create(Book: BookDto, req: any): Promise<BookEntity>;
    update(id: number, Book: BookDto, req: any): Promise<BookEntity>;
    remove(bookId: number): Promise<string>;
    uploadImage(file: Express.Multer.File): string;
}
