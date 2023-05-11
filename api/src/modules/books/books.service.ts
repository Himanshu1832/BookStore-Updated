import { Injectable, Inject } from '@nestjs/common';
import { Book } from './books.entity';
import { BookDto } from './dto/book.dto';
import { User } from '../users/user.entity';
import { BOOK_REPOSITORY } from '../../core/constants';

@Injectable()
export class BooksService {
    constructor(@Inject(BOOK_REPOSITORY) private readonly bookRepository: typeof Book) { }

    async create(Book: BookDto): Promise<Book> {
        return await this.bookRepository.create<Book>({ ...Book });
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.findAll<Book>({
        	// include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async findOne(id): Promise<Book> {
        return await this.bookRepository.findOne({
        	where: { id },
        	// include: [{ model: User, attributes: { exclude: ['password'] } }],
    	});
    }

    async delete(id) {
        return await this.bookRepository.destroy({ where: { id} });
    }

    async update(id, data, uid) {
        const [numberOfAffectedRows, [updatedBook]] = await this.bookRepository.update({ ...data }, { where: { id, uid }, returning: true });

        return { numberOfAffectedRows, updatedBook };
    }
}